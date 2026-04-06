<template>
  <section :id="id" ref="target" class="base-section reveal-block" :class="{ 'is-visible': isVisible }">
    <BaseContainer :narrow="narrow">
      <div v-if="eyebrow || title || description" class="section-head" :class="{ centered }">
        <BaseBadge v-if="eyebrow" tone="tint">{{ eyebrow }}</BaseBadge>
        <BaseTypewriter
          v-if="title"
          as="h2"
          :text="title"
          :speed="20"
          :start-delay="80"
          :caret="true"
        />
        <BaseTypewriter
          v-if="description"
          as="p"
          :text="description"
          :speed="11"
          :start-delay="220"
        />
      </div>
      <slot />
    </BaseContainer>
  </section>
</template>

<script setup>
import { useReveal } from "../../composables/useReveal";
import BaseBadge from "./BaseBadge.vue";
import BaseContainer from "./BaseContainer.vue";
import BaseTypewriter from "./BaseTypewriter.vue";

const props = defineProps({
  id: {
    type: String,
    default: undefined,
  },
  eyebrow: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  narrow: {
    type: Boolean,
    default: false,
  },
  centered: {
    type: Boolean,
    default: false,
  },
  immediate: {
    type: Boolean,
    default: false,
  },
});

const { target, isVisible } = useReveal({ immediate: props.immediate });
</script>

<style scoped>
.base-section {
  position: relative;
  padding: var(--section-gap, 5rem) 0 0;
}

.base-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(136, 205, 255, 0.08) 30%, rgba(5, 232, 240, 0.12) 50%, rgba(136, 205, 255, 0.08) 70%, transparent 100%);
  pointer-events: none;
}

.section-head {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: none;
  margin-bottom: 3rem;
}

.section-head.centered {
  margin-inline: auto;
  text-align: center;
  align-items: center;
}

.section-head h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 2.8vw, 2.8rem);
  line-height: 1.08;
  letter-spacing: -0.035em;
  font-weight: 800;
  max-width: none;
  background: linear-gradient(135deg, var(--color-text) 0%, var(--color-text) 58%, rgba(20, 114, 255, 0.88) 82%, rgba(5, 232, 240, 0.95) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-head.centered h2 {
  max-width: 20ch;
}

.section-head p {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.8;
  max-width: none;
}
</style>
