<template>
  <a
    v-if="tag === 'a'"
    class="base-button"
    :class="[variant, sizeClass, { block }]"
    :href="href"
  >
    <span class="btn-label"><slot /></span>
    <span v-if="variant === 'primary'" class="btn-shimmer" aria-hidden="true" />
  </a>
  <button
    v-else
    class="base-button"
    :class="[variant, sizeClass, { block }]"
    :type="type"
  >
    <span class="btn-label"><slot /></span>
    <span v-if="variant === 'primary'" class="btn-shimmer" aria-hidden="true" />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  tag: { type: String, default: "a" },
  href: { type: String, default: "#" },
  type: { type: String, default: "button" },
  variant: { type: String, default: "primary" },
  size: { type: String, default: "md" },
  block: { type: Boolean, default: false },
});

const sizeClass = computed(() => `size-${props.size}`);
</script>

<style scoped>
.base-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 300ms var(--ease-spring),
    box-shadow 300ms ease,
    border-color 200ms ease,
    background 200ms ease;
}

/* Sizes */
.size-sm { min-height: 2.6rem; padding: 0.55rem 1.2rem; font-size: 0.76rem; }
.size-md { min-height: 3rem; padding: 0.8rem 1.6rem; font-size: 0.82rem; }
.size-lg { min-height: 3.4rem; padding: 0.95rem 2rem; font-size: 0.85rem; }

.base-button.block { width: 100%; }

.btn-label {
  position: relative;
  z-index: 1;
}

/* ── Primary ── */
.base-button.primary {
  color: #04111d;
  background: linear-gradient(135deg, var(--color-brand-strong), var(--color-brand-accent));
  box-shadow: 0 2px 16px rgba(90, 227, 207, 0.22), 0 0 0 0 rgba(90, 227, 207, 0);
}

.base-button.primary:hover {
  transform: translateY(-3px);
  box-shadow:
    0 8px 32px rgba(90, 227, 207, 0.32),
    0 0 0 1px rgba(90, 227, 207, 0.18),
    0 0 60px rgba(90, 227, 207, 0.08);
}

.base-button.primary:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 2px 8px rgba(90, 227, 207, 0.15);
}

/* Shimmer on primary */
.btn-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: shimmer 3s ease-in-out infinite;
  pointer-events: none;
}

/* ── Secondary ── */
.base-button.secondary {
  color: var(--color-text);
  background: var(--glass-bg-strong);
  border-color: var(--glass-border);
}

.base-button.secondary:hover {
  transform: translateY(-2px);
  border-color: var(--glass-border-hover);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.base-button.secondary:active {
  transform: translateY(0);
}

/* ── Ghost ── */
.base-button.ghost {
  color: var(--color-text-soft);
  background: transparent;
  border-color: var(--glass-border);
}

.base-button.ghost:hover {
  transform: translateY(-3px);
  color: var(--color-text);
  background: rgba(122, 182, 255, 0.06);
  border-color: var(--glass-border-hover);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.base-button.ghost:active {
  transform: translateY(0);
}

/* ── Focus ── */
.base-button:focus-visible {
  outline: 2px solid rgba(90, 227, 207, 0.5);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .base-button {
    transition: none;
  }
  .base-button:hover { transform: none; }
  .btn-shimmer { animation: none; display: none; }
}
</style>
