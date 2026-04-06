<script setup>
import { computed } from "vue";
import { useCountUp } from "../../composables/useCountUp";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const activeRef = computed(() => props.active);
const { displayValue } = useCountUp(props.item.value, activeRef);

const formattedValue = computed(() => {
  const fixed = Number.isInteger(props.item.value)
    ? Math.round(displayValue.value).toString()
    : displayValue.value.toFixed(1);

  return `${fixed}${props.item.suffix}`;
});
</script>

<template>
  <article class="stat-item">
    <strong>{{ formattedValue }}</strong>
    <p>{{ item.label }}</p>
  </article>
</template>

<style scoped>
.stat-item {
  padding: 1.3rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border-subtle);
  background: rgba(13, 22, 36, 0.6);
  transition:
    border-color 280ms ease,
    transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 280ms ease;
}

.stat-item:hover {
  border-color: rgba(176, 211, 255, 0.18);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(1, 6, 15, 0.22), 0 0 20px rgba(90, 227, 207, 0.04);
}

.stat-item strong {
  display: block;
  margin-bottom: 0.5rem;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 2.8vw, 2.5rem);
  line-height: 0.95;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-brand-strong), var(--color-brand-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-item p {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.88rem;
  line-height: 1.5;
}

@media (prefers-reduced-motion: reduce) {
  .stat-item {
    transition: none;
  }

  .stat-item:hover {
    transform: none;
  }
}
</style>
