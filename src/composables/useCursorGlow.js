import { onBeforeUnmount, onMounted, ref } from "vue";

/**
 * Lightweight cursor glow effect.
 * Updates CSS custom properties on document.documentElement via rAF-throttled mousemove.
 * The actual glow is rendered by a fixed-position div in the template (no canvas, no heavy JS).
 * On touch devices or prefers-reduced-motion the effect is disabled.
 */
export function useCursorGlow() {
  const isActive = ref(false);
  let frameId = 0;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let running = false;

  const lerp = (a, b, t) => a + (b - a) * t;

  const tick = () => {
    currentX = lerp(currentX, targetX, 0.15);
    currentY = lerp(currentY, targetY, 0.15);

    const root = document.documentElement;
    root.style.setProperty("--cursor-x", `${currentX}px`);
    root.style.setProperty("--cursor-y", `${currentY}px`);

    if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
      frameId = requestAnimationFrame(tick);
    } else {
      running = false;
    }
  };

  const onMove = (e) => {
    targetX = e.clientX;
    targetY = e.clientY;

    if (!isActive.value) {
      isActive.value = true;
    }

    if (!running) {
      running = true;
      frameId = requestAnimationFrame(tick);
    }
  };

  const onLeave = () => {
    isActive.value = false;
  };

  onMounted(() => {
    // Skip on touch-only devices or reduced motion
    const isTouchOnly = window.matchMedia("(hover: none)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouchOnly || prefersReduced) return;

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
  });

  onBeforeUnmount(() => {
    cancelAnimationFrame(frameId);
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseleave", onLeave);

    // Clean up CSS variables
    const root = document.documentElement;
    root.style.removeProperty("--cursor-x");
    root.style.removeProperty("--cursor-y");
  });

  return { isActive };
}
