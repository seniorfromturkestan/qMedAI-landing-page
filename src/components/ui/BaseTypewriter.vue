<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  as: {
    type: String,
    default: "span",
  },
  className: {
    type: [String, Array, Object],
    default: "",
  },
  speed: {
    type: Number,
    default: 22,
  },
  startDelay: {
    type: Number,
    default: 0,
  },
  triggerOnce: {
    type: Boolean,
    default: true,
  },
  caret: {
    type: Boolean,
    default: false,
  },
});

const root = ref(null);
const visibleText = ref("");
const isTyping = ref(false);

let observer = null;
let startTimeout = null;
let typingTimer = null;
let hasAnimated = false;

const componentClass = computed(() => [
  "typewriter",
  props.className,
  { "is-typing": props.caret && isTyping.value },
]);

const clearTimers = () => {
  if (startTimeout) {
    window.clearTimeout(startTimeout);
    startTimeout = null;
  }

  if (typingTimer) {
    window.clearInterval(typingTimer);
    typingTimer = null;
  }
};

const finishTyping = () => {
  clearTimers();
  visibleText.value = props.text;
  isTyping.value = false;
  hasAnimated = true;
};

const startTyping = () => {
  clearTimers();

  const reduceMotion = typeof window !== "undefined"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!props.text || reduceMotion) {
    finishTyping();
    return;
  }

  visibleText.value = "";
  isTyping.value = true;

  startTimeout = window.setTimeout(() => {
    let index = 0;

    typingTimer = window.setInterval(() => {
      index += 1;
      visibleText.value = props.text.slice(0, index);

      if (index >= props.text.length) {
        finishTyping();
      }
    }, props.speed);
  }, props.startDelay);
};

const maybeStartTyping = () => {
  if (props.triggerOnce && hasAnimated) {
    visibleText.value = props.text;
    isTyping.value = false;
    return;
  }

  startTyping();
};

watch(
  () => props.text,
  () => {
    hasAnimated = false;
    maybeStartTyping();
  },
);

onMounted(() => {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    maybeStartTyping();
    return;
  }

  observer = new window.IntersectionObserver(
    (entries) => {
      const [entry] = entries;

      if (!entry?.isIntersecting) {
        return;
      }

      maybeStartTyping();

      if (props.triggerOnce && observer) {
        observer.disconnect();
        observer = null;
      }
    },
    {
      threshold: 0.35,
    },
  );

  observer.observe(root.value);
});

onBeforeUnmount(() => {
  clearTimers();

  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>

<template>
  <component :is="as" ref="root" :class="componentClass">
    {{ visibleText }}
  </component>
</template>

<style scoped>
.typewriter {
  white-space: pre-wrap;
}

.typewriter:is(span) {
  display: inline-block;
}

.typewriter.is-typing::after {
  content: "";
  display: inline-block;
  width: 0.08em;
  height: 0.92em;
  margin-left: 0.08em;
  vertical-align: -0.08em;
  border-radius: 999px;
  background: currentColor;
  opacity: 0.9;
  animation: typewriterCaret 900ms steps(1) infinite;
}

@keyframes typewriterCaret {
  0%, 49% { opacity: 0.9; }
  50%, 100% { opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .typewriter.is-typing::after {
    animation: none;
  }
}
</style>
