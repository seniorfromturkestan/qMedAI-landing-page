<script setup>
import { useReveal } from "../../composables/useReveal";
import BaseBadge from "../ui/BaseBadge.vue";
import BaseContainer from "../ui/BaseContainer.vue";
import StatsMetric from "./StatsMetric.vue";

defineProps({
  content: {
    type: Object,
    required: true,
  },
});

const { target, isVisible } = useReveal();
</script>

<template>
  <section ref="target" class="stats-wrap reveal-block" :class="{ 'is-visible': isVisible }">
    <BaseContainer>
      <div class="stats-head">
        <BaseBadge tone="tint">{{ content.eyebrow }}</BaseBadge>
        <h2>{{ content.title }}</h2>
      </div>
      <div class="stats-shell">
        <div class="stats-glow" aria-hidden="true" />
        <div class="stats-grid">
          <StatsMetric
            v-for="(item, index) in content.items"
            :key="item.label"
            :item="item"
            :active="isVisible"
            :style="{ '--delay': `${index * 90}ms` }"
          />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
.stats-wrap {
  padding-top: var(--section-gap, 5rem);
}

.stats-shell {
  position: relative;
  overflow: visible;
}

.stats-glow {
  position: absolute;
  inset: auto -10% -40% 35%;
  height: 18rem;
  background: radial-gradient(circle, rgba(90, 227, 207, 0.10) 0%, rgba(122, 182, 255, 0.04) 40%, transparent 70%);
  filter: blur(28px);
  pointer-events: none;
  animation: pulseGlow 8s ease-in-out infinite;
}

.stats-head {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 52rem;
  margin-bottom: 2rem;
  position: relative;
}

.stats-head h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.65rem, 2.6vw, 2.4rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 800;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.85rem;
  position: relative;
}

@media (max-width: 920px) {
  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
