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
    id="platform"
    :eyebrow="content.eyebrow"
    :title="content.title"
    :description="content.description"
  >
    <div class="split-grid">
      <BaseCard class="split-card reveal-child">
        <div class="card-inner">
          <p class="split-label">{{ content.painsLabel }}</p>
          <ul>
            <li v-for="(item, i) in content.pains" :key="item">
              <span class="pain-dot" />
              {{ item }}
            </li>
          </ul>
        </div>
      </BaseCard>

      <BaseCard class="split-card accent-card reveal-child" tone="accent" style="--delay: 140ms">
        <div class="card-inner">
          <p class="split-label accent-label">{{ content.solutionsLabel }}</p>
          <ul>
            <li v-for="item in content.solutions" :key="item">
              <span class="solution-dot" />
              {{ item }}
            </li>
          </ul>
        </div>
      </BaseCard>
    </div>
  </BaseSection>
</template>

<style scoped>
.split-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.split-card {
  padding: 0;
  overflow: hidden;
  transition: transform 320ms var(--ease-spring), box-shadow 280ms ease, border-color 280ms ease;
}

.split-card:hover {
  box-shadow: var(--shadow-lg);
}

.card-inner {
  padding: 1.8rem;
}

.split-label {
  margin: 0 0 1.2rem;
  color: var(--color-text-muted);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.accent-label {
  color: var(--color-brand-strong);
}

ul {
  display: grid;
  gap: 1.1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #f5f7ff;
  line-height: 1.65;
  font-size: 0.95rem;
}

.pain-dot,
.solution-dot {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.55rem;
  border-radius: 999px;
  flex-shrink: 0;
  transition: transform 280ms var(--ease-spring), box-shadow 280ms ease;
}

.pain-dot {
  background: #ff4d57;
  box-shadow: 0 0 14px rgba(255, 77, 87, 0.6);
  animation: blinkDot 1.4s ease-in-out infinite;
}

.solution-dot {
  background: linear-gradient(135deg, var(--color-brand-strong), #7dff96);
  box-shadow: 0 0 14px rgba(90, 227, 207, 0.28);
}

.split-card:hover .solution-dot,
.split-card:hover .pain-dot {
  transform: scale(1.2);
}

.accent-card li {
  color: var(--color-text-soft);
}

@keyframes blinkDot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.35;
    transform: scale(0.72);
  }
}

@media (max-width: 820px) {
  .split-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .split-card { transition: none; }
  .split-card:hover { transform: none; }
  .pain-dot,
  .solution-dot {
    transition: none;
  }
  .pain-dot { animation: none; }
}
</style>
