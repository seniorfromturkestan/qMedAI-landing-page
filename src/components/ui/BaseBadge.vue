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
  color: rgba(169, 242, 232, 0.92);
  background: rgba(90, 227, 207, 0.1);
  border-color: rgba(90, 227, 207, 0.2);
  box-shadow: 0 0 12px rgba(90, 227, 207, 0.06);
}
</style>
