<script setup>
import { ref } from "vue";
import BaseSection from "../ui/BaseSection.vue";

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});

const rail = ref(null);
const scrollRail = (direction) => {
  if (!rail.value) {
    return;
  }

  const cardWidth = rail.value.firstElementChild?.getBoundingClientRect().width ?? 320;
  rail.value.scrollBy({
    left: direction * (cardWidth + 16),
    behavior: "smooth",
  });
};
</script>

<template>
  <BaseSection
    id="media"
    :eyebrow="content.eyebrow"
    :title="content.title"
    :description="content.description"
  >
    <div class="media-head">
      <p class="media-hint">{{ content.scrollHint }}</p>
      <div class="media-controls">
        <button class="media-nav" type="button" aria-label="Previous stories" @click="scrollRail(-1)">
          <span>&larr;</span>
        </button>
        <button class="media-nav" type="button" aria-label="Next stories" @click="scrollRail(1)">
          <span>&rarr;</span>
        </button>
      </div>
    </div>

    <div class="media-frame">
      <div ref="rail" class="media-rail">
        <a
          v-for="(item, index) in props.content.items"
          :key="item.title"
          class="media-card reveal-child"
          :href="item.href"
          target="_blank"
          rel="noreferrer"
          :style="{ '--delay': `${index * 80}ms`, '--card-image': `url(${item.image})` }"
        >
          <div class="media-image">
            <span class="media-source">{{ item.source }}</span>
          </div>
          <div class="media-body">
            <strong>{{ item.title }}</strong>
            <p>{{ item.excerpt }}</p>
            <span class="media-meta">
              <span>{{ item.date }}</span>
              <span>{{ content.openLabel }}</span>
            </span>
          </div>
        </a>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped>
.media-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: -1rem 0 1.25rem;
}

.media-hint {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.media-controls {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
}

.media-nav {
  display: grid;
  place-items: center;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 999px;
  border: 1px solid rgba(176, 211, 255, 0.14);
  background: rgba(8, 18, 34, 0.55);
  color: var(--color-text);
  transition: transform 220ms var(--ease-spring), border-color 220ms ease, background 220ms ease;
}

.media-nav:hover {
  transform: translateY(-2px);
  border-color: rgba(90, 227, 207, 0.24);
  background: rgba(10, 28, 40, 0.78);
}

.media-frame {
  overflow: visible;
  z-index: 1;
  padding: 0.75rem 0 1rem;
}

.media-rail {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(19rem, 20.5rem);
  gap: 1rem;
  overflow-x: auto;
  overflow-y: visible;
  overscroll-behavior-x: contain;
  padding: 0.3rem 0.25rem 0.85rem;
  scroll-snap-type: x proximity;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.media-rail::-webkit-scrollbar {
  display: none;
}

.media-card {
  display: flex;
  flex-direction: column;
  min-height: 28rem;
  border-radius: 1.9rem;
  overflow: hidden;
  border: 1px solid rgba(176, 211, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
  scroll-snap-align: start;
  transition: transform 320ms var(--ease-spring), border-color 240ms ease, box-shadow 240ms ease;
}

.media-card:hover {
  transform: translateY(-8px) scale(1.025);
  border-color: rgba(90, 227, 207, 0.24);
  box-shadow: 0 28px 60px rgba(1, 8, 20, 0.32);
}

.media-image {
  position: relative;
  min-height: 16rem;
  background:
    linear-gradient(180deg, rgba(7, 13, 26, 0.03) 0%, rgba(7, 13, 26, 0.42) 100%),
    var(--card-image) center / cover no-repeat;
}

.media-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 28%),
    linear-gradient(180deg, transparent 56%, rgba(7, 13, 26, 0.52) 100%);
}

.media-source {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(6, 14, 26, 0.72);
  border: 1px solid rgba(176, 211, 255, 0.14);
  color: #eef3ff;
  font-size: 0.73rem;
  font-weight: 700;
}

.media-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.25rem 1.3rem 1.4rem;
}

.media-body strong {
  font-size: 1.1rem;
  line-height: 1.28;
}

.media-body p {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.88rem;
  line-height: 1.65;
}

.media-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  color: var(--color-text-soft);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

@media (max-width: 720px) {
  .media-head {
    align-items: flex-start;
    flex-direction: column;
    margin: -0.5rem 0 1rem;
  }

  .media-rail {
    grid-auto-columns: minmax(15.5rem, 82vw);
  }

  .media-card {
    min-height: 25rem;
  }

  .media-image {
    min-height: 13rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .media-card {
    transition: none;
  }
}
</style>
