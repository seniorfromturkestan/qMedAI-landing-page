<template>
  <article class="base-card" :class="[tone, { elevated }]">
    <slot />
  </article>
</template>

<script setup>
defineProps({
  tone: { type: String, default: "default" },
  elevated: { type: Boolean, default: false },
});
</script>

<style scoped>
.base-card {
  border-radius: var(--radius-lg);
  border: 1px solid var(--glass-border);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 50%),
    var(--glass-bg-strong);
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
  transition:
    border-color 320ms ease,
    box-shadow 320ms ease,
    transform 320ms var(--ease-spring);
}

/* Hover inner glow via pseudo */
.base-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    650px circle at var(--cursor-x, 50%) var(--cursor-y, 50%),
    rgba(5, 232, 240, 0.08),
    rgba(20, 114, 255, 0.03) 40%,
    transparent 60%
  );
  opacity: 0;
  pointer-events: none;
  transition: opacity 400ms ease;
}

.base-card:hover::after {
  opacity: 1;
}

.base-card:hover {
  transform:scale(1.04);
  border-color: var(--glass-border-hover);
  box-shadow: var(--shadow-md), 0 0 0 1px rgba(5, 232, 240, 0.06);
}

/* ── Tones ── */
.base-card.accent {
  background:
    radial-gradient(circle at top left, rgba(5, 232, 240, 0.1), transparent 40%),
    linear-gradient(180deg, rgba(9, 31, 60, 0.96), rgba(8, 22, 44, 0.9));
  border-color: rgba(5, 232, 240, 0.16);
}

.base-card.accent:hover {
  border-color: rgba(5, 232, 240, 0.28);
}

.base-card.deep {
  color: white;
  background:
    radial-gradient(circle at 50% 0%, rgba(20, 114, 255, 0.1), transparent 40%),
    linear-gradient(160deg, #061224 0%, #0a1d39 50%, #030a15 100%);
  border-color: rgba(136, 205, 255, 0.12);
}

.base-card.deep:hover {
  border-color: rgba(136, 205, 255, 0.22);
}

.base-card.elevated {
  box-shadow: var(--shadow-md), 0 0 60px rgba(20, 114, 255, 0.06);
}

@media (prefers-reduced-motion: reduce) {
  .base-card {
    transition: none;
  }
  .base-card:hover {
    transform: none;
    border-color: var(--glass-border);
  }
  .base-card::after { display: none; }
}
</style>
