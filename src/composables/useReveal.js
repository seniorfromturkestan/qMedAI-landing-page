import { onBeforeUnmount, onMounted, ref } from "vue";

export function useReveal(options = {}) {
  const target = ref(null);
  const isVisible = ref(Boolean(options.immediate));
  let observer;

  onMounted(() => {
    if (options.immediate || typeof window === "undefined" || !("IntersectionObserver" in window)) {
      isVisible.value = true;
      return;
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer?.disconnect();
        }
      },
      {
        threshold: options.threshold ?? 0.2,
        rootMargin: options.rootMargin ?? "0px 0px -10% 0px",
      },
    );

    if (target.value) {
      observer.observe(target.value);
    }
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });

  return { target, isVisible };
}
