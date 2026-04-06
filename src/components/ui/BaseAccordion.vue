<template>
  <div class="accordion-list">
    <article
      v-for="(item, index) in items"
      :key="item.question"
      class="accordion-item reveal-child"
      :class="{ 'is-open': openIndexes.includes(index) }"
      :style="{ '--delay': `${index * 90}ms` }"
    >
      <button class="accordion-trigger" type="button" :aria-expanded="openIndexes.includes(index)" @click="toggleItem(index)">
        <span>{{ item.question }}</span>
        <span class="plus">+</span>
      </button>
      <div class="accordion-content" :aria-hidden="!openIndexes.includes(index)">
        <div class="accordion-content-inner">
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});

const openIndexes = ref([0]);

const toggleItem = (index) => {
  if (openIndexes.value.includes(index)) {
    openIndexes.value = openIndexes.value.filter((item) => item !== index);
    return;
  }

  openIndexes.value = [...openIndexes.value, index];
};
</script>

<style scoped>
.accordion-list {
  display: grid;
  gap: 0.75rem;
}

.accordion-item {
  border-radius: var(--radius-lg);
  border: 1px solid var(--glass-border);
  background: var(--glass-bg-strong);
  overflow: hidden;
  transition: border-color 280ms ease, box-shadow 280ms ease, transform 280ms ease;
}

.accordion-item:hover {
  border-color: rgba(176, 211, 255, 0.24);
  box-shadow: 0 4px 16px rgba(1, 6, 15, 0.15);
}

.accordion-item.is-open {
  border-color: rgba(90, 227, 207, 0.2);
  box-shadow: 0 14px 36px rgba(2, 12, 28, 0.22);
}

.accordion-item.is-open .accordion-trigger {
  color: var(--color-brand-strong);
  background: rgba(122, 182, 255, 0.035);
}

.accordion-trigger {
  display: flex;
  width: 100%;
  border: 0;
  background: transparent;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
  padding: 1.3rem 1.5rem;
  font-weight: 700;
  font-size: 0.95rem;
  color: inherit;
  text-align: left;
  transition: color 200ms ease, background 200ms ease;
}

.accordion-trigger:hover {
  color: var(--color-brand-strong);
  background: rgba(122, 182, 255, 0.035);
}

.accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 340ms cubic-bezier(0.22, 1, 0.36, 1);
}

.accordion-content-inner {
  min-height: 0;
  overflow: hidden;
}

.accordion-item p {
  margin: 0;
  padding: 0 1.5rem 1.4rem;
  color: var(--color-text-muted);
  line-height: 1.75;
  font-size: 0.95rem;
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 240ms ease, transform 320ms ease;
}

.accordion-item.is-open .accordion-content {
  grid-template-rows: 1fr;
}

.accordion-item.is-open p {
  opacity: 1;
  transform: translateY(0);
}

.plus {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background: rgba(122, 182, 255, 0.08);
  border: 1px solid var(--glass-border-subtle);
  font-size: 1.1rem;
  font-weight: 600;
  flex-shrink: 0;
  color: var(--color-text-soft);
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1), background 200ms ease;
}

.accordion-item.is-open .plus {
  transform: rotate(45deg);
  background: rgba(90, 227, 207, 0.12);
  color: var(--color-brand-strong);
}

@media (prefers-reduced-motion: reduce) {
  .plus,
  .accordion-content,
  .accordion-item p {
    transition: none;
  }

  .accordion-item {
    transition: none;
  }
}
</style>
