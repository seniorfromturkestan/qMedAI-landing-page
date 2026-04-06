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
    rgba(90, 227, 207, 0.06),
    rgba(122, 182, 255, 0.02) 40%,
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
  transform: translateY(-8px) scale(1.1);
  border-color: var(--glass-border-hover);
  box-shadow: var(--shadow-md), 0 0 0 1px rgba(90, 227, 207, 0.04);
}

/* ── Tones ── */
.base-card.accent {
  background:
    radial-gradient(circle at top left, rgba(90, 227, 207, 0.08), transparent 40%),
    linear-gradient(180deg, rgba(10, 26, 40, 0.96), rgba(10, 20, 32, 0.9));
  border-color: rgba(90, 227, 207, 0.14);
}

.base-card.accent:hover {
  border-color: rgba(90, 227, 207, 0.26);
}

.base-card.deep {
  color: white;
  background:
    radial-gradient(circle at 50% 0%, rgba(122, 182, 255, 0.08), transparent 40%),
    linear-gradient(160deg, #070e19 0%, #0c1623 50%, #050a12 100%);
  border-color: rgba(176, 211, 255, 0.1);
}

.base-card.deep:hover {
  border-color: rgba(176, 211, 255, 0.2);
}

.base-card.elevated {
  box-shadow: var(--shadow-md), 0 0 60px rgba(90, 227, 207, 0.03);
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
