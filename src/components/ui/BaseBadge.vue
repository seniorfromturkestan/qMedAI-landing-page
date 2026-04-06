<template>
  <span class="base-badge" :class="tone">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  tone: {
    type: String,
    default: "default",
  },
});
</script>

<style scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.52rem 0.95rem;
  border-radius: 999px;
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  color: var(--color-text-muted);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: border-color 250ms ease, background 250ms ease;
}

.base-badge.tint {
  color: rgba(185, 248, 255, 0.94);
  background: linear-gradient(135deg, rgba(20, 114, 255, 0.16), rgba(5, 232, 240, 0.12));
  border-color: rgba(5, 232, 240, 0.22);
  box-shadow: 0 0 12px rgba(20, 114, 255, 0.1);
}
</style>
