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
    :eyebrow="content.eyebrow"
    :title="content.title"
    :description="content.description"
  >
    <div class="benefits-grid">
      <BaseCard class="benefit-card reveal-child" tone="deep">
        <div class="benefit-inner">
          <p class="benefit-label">{{ content.organizationLabel }}</p>
          <ul>
            <li v-for="item in content.organizationItems" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </BaseCard>

      <BaseCard class="benefit-card reveal-child" style="--delay: 120ms">
        <div class="benefit-inner">
          <p class="benefit-label">{{ content.patientLabel }}</p>
          <ul>
            <li v-for="item in content.patientItems" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </BaseCard>
    </div>
  </BaseSection>
</template>

<style scoped>
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.benefit-card {
  padding: 0;
  overflow: visible;
  transition: transform 320ms var(--ease-spring), box-shadow 280ms ease, border-color 280ms ease;
}

.benefit-card::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background:
    linear-gradient(135deg, rgba(20, 114, 255, 0.16), transparent 35%, rgba(5, 232, 240, 0.16));
  opacity: 0;
  transition: opacity 260ms ease;
  pointer-events: none;
}

.benefit-inner {
  padding: 1.8rem;
  position: relative;
  z-index: 1;
}

.benefit-card:hover {
  box-shadow: 0 24px 48px rgba(1, 8, 20, 0.24);
}

.benefit-card:hover::before {
  opacity: 1;
}

.benefit-label {
  margin: 0 0 1.2rem;
  font-weight: 700;
  font-size: 1.05rem;
  color: inherit;
  transition: transform 280ms var(--ease-spring), color 220ms ease;
}

.benefit-card:hover .benefit-label {
  transform: translateX(6px);
  color: var(--color-brand-strong);
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
  color: inherit;
  opacity: 0.85;
  line-height: 1.65;
  font-size: 0.95rem;
  transition: transform 260ms ease, opacity 260ms ease;
}

.benefit-card:hover li {
  opacity: 1;
}

.benefit-card:hover li:nth-child(1) { transform: translateX(4px); }
.benefit-card:hover li:nth-child(2) { transform: translateX(8px); }
.benefit-card:hover li:nth-child(3) { transform: translateX(12px); }

@media (max-width: 820px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>
