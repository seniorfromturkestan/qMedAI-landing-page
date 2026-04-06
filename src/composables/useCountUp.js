import { onBeforeUnmount, ref, watch } from "vue";

export function useCountUp(targetValue, active, duration = 1400) {
  const displayValue = ref(0);
  let frameId = 0;

  const animate = () => {
    const numericTarget = Number(targetValue) || 0;
    const startTime = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      displayValue.value = numericTarget * (1 - (1 - progress) * (1 - progress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
  };

  watch(
    active,
    (value) => {
      if (value) {
        animate();
      }
    },
    { immediate: true },
  );

  onBeforeUnmount(() => {
    window.cancelAnimationFrame(frameId);
  });

  return { displayValue };
}
