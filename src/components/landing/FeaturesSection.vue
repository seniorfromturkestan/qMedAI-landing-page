<script setup>
import BaseIconCard from "../ui/BaseIconCard.vue";
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
    id="features"
    :eyebrow="content.eyebrow"
    :title="content.title"
    :description="content.description"
  >
    <div class="feature-grid">
      <div
        v-for="(feature, index) in content.items"
        :key="feature.title"
        class="feature-slot reveal-child"
        :style="{ '--delay': `${index * 80}ms` }"
      >
        <BaseIconCard
          :icon="feature.icon"
          :title="feature.title"
          :text="feature.text"
          class="feature-card"
        >
          <div class="feature-meta">
            <span>{{ `${index + 1}`.padStart(2, "0") }}</span>
          </div>
        </BaseIconCard>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped>
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.feature-card {
  min-height: 100%;
}

.feature-meta {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1.2rem;
  padding-top: 0.9rem;
  border-top: 1px solid rgba(136, 205, 255, 0.08);
  color: var(--color-text-muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

@media (max-width: 980px) {
  .feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
