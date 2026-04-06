<template>
  <BaseCard class="icon-card" :class="{ compact }">
    <div class="icon-mark">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          v-for="(path, index) in iconPaths"
          :key="`${icon}-${index}`"
          :d="path"
        />
      </svg>
    </div>
    <h3>{{ title }}</h3>
    <p v-if="text">{{ text }}</p>
    <slot />
  </BaseCard>
</template>

<script setup>
import { computed } from "vue";
import BaseCard from "./BaseCard.vue";

const props = defineProps({
  icon: {
    type: String,
    default: "pulse",
  },
  title: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  compact: {
    type: Boolean,
    default: false,
  },
});

const icons = {
  pulse: [
    "M3.5 12h3.2l2.2-4.2 3.1 8.4 2.5-5.1h5",
    "M12 3.75a8.25 8.25 0 1 1 0 16.5a8.25 8.25 0 0 1 0-16.5Z",
  ],
  triage: [
    "M6 17.25V12.5",
    "M12 17.25V9",
    "M18 17.25V6.5",
    "M4 20.25h16",
  ],
  dashboard: [
    "M4.75 5.25h6.5v5.5h-6.5z",
    "M12.75 5.25h6.5v3.5h-6.5z",
    "M12.75 10.75h6.5v8h-6.5z",
    "M4.75 12.75h6.5v6h-6.5z",
  ],
  registry: [
    "M7.25 4.75h9.5a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2h-9.5a2 2 0 0 1-2-2V6.75a2 2 0 0 1 2-2Z",
    "M9 3.75h6",
    "M8.5 9h7",
    "M8.5 12h7",
    "M8.5 15h4.5",
  ],
  message: [
    "M5.25 6.25h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-8.5l-4.5 3v-3h-.5a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5Z",
    "M8 10h8",
    "M8 13h5",
  ],
  alert: [
    "M12 4.5l8 14h-16l8-14Z",
    "M12 9v4.5",
    "M12 16.5h.01",
  ],
};

const iconPaths = computed(() => icons[props.icon] ?? icons.pulse);
</script>

<style scoped>
.icon-card {
  height: 100%;
  padding: 1.5rem;
  transition:
    transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 280ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 280ms ease;
}

.icon-card:hover {
  box-shadow: var(--shadow-lg), 0 0 40px rgba(20, 114, 255, 0.08);
  border-color: rgba(136, 205, 255, 0.24);
}

.icon-card.compact {
  padding: 1.1rem 1.2rem;
}

.icon-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  margin-bottom: 1rem;
  border-radius: var(--radius-sm);
  background: linear-gradient(135deg, rgba(20, 114, 255, 0.14), rgba(5, 232, 240, 0.12));
  border: 1px solid rgba(136, 205, 255, 0.12);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
  overflow: hidden;
  transition: background 280ms ease, transform 280ms ease, box-shadow 280ms ease;
}

.icon-card:hover .icon-mark {
  background: linear-gradient(135deg, rgba(20, 114, 255, 0.22), rgba(5, 232, 240, 0.18));
  transform: rotate(-4deg) scale(1.06);
  box-shadow: 0 10px 28px rgba(20, 114, 255, 0.18);
}

.icon-mark svg {
  width: 1.7rem;
  height: 1.7rem;
  stroke: var(--color-brand-accent);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 0 10px rgba(5, 232, 240, 0.18));
}

.icon-card h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
}

.icon-card p {
  margin: 0.6rem 0 0;
  color: var(--color-text-muted);
  font-size: 0.92rem;
  line-height: 1.7;
}

@media (prefers-reduced-motion: reduce) {
  .icon-card {
    transition: none;
  }

  .icon-card:hover {
    transform: none;
  }
}
</style>
