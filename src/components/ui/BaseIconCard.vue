<template>
  <BaseCard class="icon-card" :class="{ compact }">
    <div class="icon-mark" :class="icon">
      <span />
    </div>
    <h3>{{ title }}</h3>
    <p v-if="text">{{ text }}</p>
    <slot />
  </BaseCard>
</template>

<script setup>
import BaseCard from "./BaseCard.vue";

defineProps({
  icon: {
    type: String,
    default: "pulse",
  },
  title: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  compact: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.icon-card {
  height: 100%;
  padding: 1.5rem;
  transition:
    transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 280ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 280ms ease;
}

.icon-card:hover {
  box-shadow: var(--shadow-lg), 0 0 40px rgba(90, 227, 207, 0.04);
  border-color: rgba(176, 211, 255, 0.22);
}

.icon-card.compact {
  padding: 1.1rem 1.2rem;
}

.icon-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  border-radius: var(--radius-sm);
  background: linear-gradient(135deg, rgba(90, 227, 207, 0.1), rgba(122, 182, 255, 0.1));
  border: 1px solid rgba(176, 211, 255, 0.06);
  overflow: hidden;
  transition: background 280ms ease, transform 280ms ease;
}

.icon-card:hover .icon-mark {
  background: linear-gradient(135deg, rgba(90, 227, 207, 0.18), rgba(122, 182, 255, 0.18));
  transform: rotate(-4deg) scale(1.06);
}

.icon-mark span {
  position: relative;
  display: block;
  width: 1.45rem;
  height: 1.45rem;
  color: var(--color-brand-accent);
}

.icon-mark span::before,
.icon-mark span::after {
  content: "";
  position: absolute;
}

.icon-mark.pulse span::before {
  inset: 0.3rem 0.05rem 0.3rem 0.05rem;
  background:
    linear-gradient(135deg, transparent 0 12%, currentColor 12% 18%, transparent 18% 33%, currentColor 33% 44%, transparent 44% 58%, currentColor 58% 64%, transparent 64% 100%);
  clip-path: polygon(0 55%, 18% 55%, 30% 32%, 44% 78%, 58% 40%, 72% 58%, 100% 58%, 100% 70%, 0 70%);
}

.icon-mark.pulse span::after {
  inset: 0.15rem;
  border: 2px solid rgba(122, 182, 255, 0.35);
  border-radius: 999px;
}

.icon-mark.triage span::before {
  left: 0.18rem;
  bottom: 0.12rem;
  width: 0.24rem;
  height: 0.68rem;
  border-radius: 999px;
  background: currentColor;
  box-shadow: 0.42rem -0.18rem 0 0 currentColor, 0.84rem -0.4rem 0 0 currentColor;
}

.icon-mark.triage span::after {
  right: 0.02rem;
  top: 0.12rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.2rem;
  border: 2px solid rgba(90, 227, 207, 0.9);
}

.icon-mark.dashboard span::before {
  inset: 0.14rem;
  border-radius: 0.32rem;
  border: 2px solid currentColor;
}

.icon-mark.dashboard span::after {
  left: 0.28rem;
  bottom: 0.25rem;
  width: 0.16rem;
  height: 0.34rem;
  border-radius: 999px;
  background: currentColor;
  box-shadow: 0.28rem -0.08rem 0 0 currentColor, 0.56rem -0.22rem 0 0 currentColor;
}

.icon-mark.registry span::before {
  inset: 0.18rem 0.22rem 0.14rem;
  border-radius: 0.24rem;
  border: 2px solid currentColor;
}

.icon-mark.registry span::after {
  left: 0.42rem;
  top: 0.04rem;
  width: 0.6rem;
  height: 0.24rem;
  border-radius: 999px;
  background: rgba(90, 227, 207, 0.9);
  box-shadow: 0 0.42rem 0 -0.08rem currentColor, 0 0.72rem 0 -0.08rem currentColor;
}

.icon-mark.message span::before {
  inset: 0.18rem 0.14rem 0.32rem;
  border-radius: 0.35rem;
  border: 2px solid currentColor;
}

.icon-mark.message span::after {
  left: 0.34rem;
  bottom: 0.12rem;
  width: 0.4rem;
  height: 0.4rem;
  border-left: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: skewX(-24deg);
}

.icon-mark.alert span::before {
  left: 0.18rem;
  top: 0.08rem;
  width: 0;
  height: 0;
  border-left: 0.54rem solid transparent;
  border-right: 0.54rem solid transparent;
  border-bottom: 1rem solid #ffb347;
}

.icon-mark.alert span::after {
  left: 0.68rem;
  top: 0.45rem;
  width: 0.1rem;
  height: 0.44rem;
  background: #08111d;
  box-shadow: 0 0.56rem 0 0 #08111d;
}

.icon-card h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
}

.icon-card p {
  margin: 0.6rem 0 0;
  color: var(--color-text-muted);
  font-size: 0.92rem;
  line-height: 1.7;
}

@media (prefers-reduced-motion: reduce) {
  .icon-card {
    transition: none;
  }

  .icon-card:hover {
    transform: none;
  }
}
</style>
