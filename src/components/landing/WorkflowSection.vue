<script setup>
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
    id="workflow"
    :eyebrow="content.eyebrow"
    :title="content.title"
    :description="content.description"
  >
    <div class="workflow-grid">
      <BaseCard
        v-for="(step, index) in content.steps"
        :key="step.step"
        class="workflow-card reveal-child"
        :style="{ '--delay': `${index * 100}ms` }"
      >
        <div class="workflow-inner">
          <div class="step-head">
            <span class="step-index">{{ step.step }}</span>
            <div class="step-connector" v-if="index < content.steps.length - 1" />
          </div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
          <div class="step-line" />
        </div>
      </BaseCard>
    </div>
  </BaseSection>
</template>

<style scoped>
.workflow-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.workflow-card {
  position: relative;
  padding: 0;
  overflow: hidden;
  transition:
    transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 280ms ease;
}

.workflow-card:hover {
  box-shadow: var(--shadow-lg);
}

.workflow-card:hover .step-line {
  transform: scaleX(1);
}

.workflow-card:hover .step-index {
  background: linear-gradient(135deg, rgba(90, 227, 207, 0.2), rgba(122, 182, 255, 0.2));
  border-color: rgba(90, 227, 207, 0.2);
}

.workflow-inner {
  padding: 1.5rem;
}

.step-head {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.step-connector {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(176, 211, 255, 0.15), transparent);
}

.step-line {
  position: absolute;
  bottom: 0;
  left: 1.5rem;
  right: 1.5rem;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--color-brand-strong), var(--color-brand-accent));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
}

.step-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(90, 227, 207, 0.1), rgba(122, 182, 255, 0.1));
  color: var(--color-text);
  border: 1px solid rgba(176, 211, 255, 0.08);
  font-weight: 800;
  font-size: 0.95rem;
  flex-shrink: 0;
  transition: background 280ms ease, border-color 280ms ease;
}

.workflow-card h3 {
  margin: 1rem 0 0.5rem;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
}

.workflow-card p {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.92rem;
  line-height: 1.65;
}

@media (max-width: 1024px) {
  .workflow-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .step-connector {
    display: none;
  }
}

@media (max-width: 640px) {
  .workflow-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .workflow-card {
    transition: none;
  }

  .workflow-card:hover {
    transform: none;
  }

  .step-line {
    transition: none;
  }
}
</style>
