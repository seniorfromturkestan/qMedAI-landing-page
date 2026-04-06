<script setup>
import BaseBadge from "../ui/BaseBadge.vue";
import BaseCard from "../ui/BaseCard.vue";
import BaseSection from "../ui/BaseSection.vue";

defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <BaseSection
    id="use-cases"
    :eyebrow="content.eyebrow"
    :title="content.title"
    :description="content.description"
  >
    <div class="use-case-layout">
      <BaseCard class="chips-card reveal-child">
        <div class="chips-inner">
          <p class="eyebrow-copy">{{ content.description }}</p>
          <div class="chips">
            <div v-for="item in content.cases" :key="item" class="chip-item">
              <BaseBadge>{{ item }}</BaseBadge>
            </div>
          </div>
        </div>
      </BaseCard>

      <BaseCard class="advantages-card reveal-child" tone="accent" style="--delay: 120ms">
        <div class="advantages-inner">
          <p class="advantage-label">{{ content.advantagesLabel }}</p>
          <ul>
            <li v-for="item in content.advantages" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </BaseCard>
    </div>
  </BaseSection>
</template>

<style scoped>
.use-case-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 1rem;
}

.chips-card,
.advantages-card {
  padding: 0;
  overflow: hidden;
}

.chips-card:hover,
.advantages-card:hover {
  box-shadow: var(--shadow-lg);
}

.chips-inner,
.advantages-inner {
  padding: 1.8rem;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.chip-item {
  transition: transform 240ms var(--ease-spring), filter 240ms ease;
}

.chip-item:hover {
  transform: translateY(-4px) scale(1.04);
  filter: brightness(1.12);
}

.chips :deep(.base-badge) {
  color: var(--color-text-soft);
}

.eyebrow-copy {
  margin: 0 0 1.2rem;
  max-width: 32rem;
  color: var(--color-text-muted);
  line-height: 1.75;
  font-size: 0.95rem;
}

.advantage-label {
  margin: 0 0 1.1rem;
  color: var(--color-brand-strong);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

ul {
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  align-items: flex-start;
  gap: 0;
  color: var(--color-text-soft);
  line-height: 1.7;
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .use-case-layout {
    grid-template-columns: 1fr;
  }
}
</style>
