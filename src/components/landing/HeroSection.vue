<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import BaseBadge from "../ui/BaseBadge.vue";
import BaseButton from "../ui/BaseButton.vue";
import BaseCard from "../ui/BaseCard.vue";
import BaseContainer from "../ui/BaseContainer.vue";

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});

const displayedTitle = ref("");
const isTyping = ref(false);

let typingTimer = null;

const clearTypingTimer = () => {
  if (typingTimer) {
    window.clearInterval(typingTimer);
    typingTimer = null;
  }
};

const startTyping = () => {
  clearTypingTimer();

  const title = props.content.title ?? "";
  const reduceMotion = typeof window !== "undefined"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!title || reduceMotion) {
    displayedTitle.value = title;
    isTyping.value = false;
    return;
  }

  displayedTitle.value = "";
  isTyping.value = true;

  let index = 0;
  typingTimer = window.setInterval(() => {
    index += 1;
    displayedTitle.value = title.slice(0, index);

    if (index >= title.length) {
      clearTypingTimer();
      isTyping.value = false;
    }
  }, 26);
};

watch(
  () => props.content.title,
  () => {
    startTyping();
  },
);

onMounted(() => {
  startTyping();
});

onBeforeUnmount(() => {
  clearTypingTimer();
});
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="hero-glow-top" aria-hidden="true" />
    <div class="hero-glow-right" aria-hidden="true" />

    <BaseContainer>
      <div class="hero-grid">
        <!-- Left: copy -->
        <div class="hero-copy hero-entrance">
          <BaseBadge tone="tint" class="hero-badge">{{ content.badge }}</BaseBadge>

          <h1 class="hero-title">
            <span class="title-gradient title-typed" :class="{ typing: isTyping }">{{ displayedTitle }}</span>
          </h1>

          <p class="hero-desc">{{ content.description }}</p>

          <div class="hero-actions">
            <BaseButton href="#contact" size="lg">{{ content.primaryCta }}</BaseButton>
            <BaseButton href="#platform" variant="ghost" size="lg">{{ content.secondaryCta }}</BaseButton>
          </div>

          <div class="micro-proof">
            <span class="proof-line" />
            <span>{{ content.proof }}</span>
          </div>

          <div class="trust-row">
            <BaseBadge v-for="item in content.trustItems" :key="item">{{ item }}</BaseBadge>
          </div>
        </div>

        <!-- Right: visual -->
        <div class="hero-visual hero-entrance delay-1">
          <div class="hero-illustration" aria-hidden="true">
            <div class="glass-orb orb orb-a" />
            <div class="pulse-ring pulse-ring-a" />
            <div class="grid-trace" />
            <div class="vital-line">
              <span class="vital-segment segment-a" />
              <span class="vital-segment segment-c" />
            </div>
          </div>

          <BaseCard class="dashboard-card" elevated>
            <div class="dashboard-header">
              <div>
                <strong>{{ content.dashboard.title }}</strong>
                <p>{{ content.dashboard.subtitle }}</p>
              </div>
              <BaseBadge tone="tint">{{ content.dashboard.badge }}</BaseBadge>
            </div>

            <div class="dashboard-grid">
              <div class="dash-metric">
                <span class="label">{{ content.dashboard.primaryMetricLabel }}</span>
                <strong class="metric-value">{{ content.dashboard.primaryMetricValue }}</strong>
                <p>{{ content.dashboard.primaryMetricNote }}</p>
              </div>

              <div class="dash-signal">
                <span class="label">{{ content.dashboard.signalLabel }}</span>
                <strong>{{ content.dashboard.signalTitle }}</strong>
                <p>{{ content.dashboard.signalNote }}</p>
              </div>

              <div class="dash-statuses">
                <div v-for="item in content.dashboard.statuses" :key="item.label" class="status-row" :class="item.tone">
                  <span class="status-dot" />
                  <span>{{ item.label }}</span>
                  <strong>{{ item.value }}</strong>
                </div>
              </div>
            </div>
          </BaseCard>

          <div class="floating-panels">
            <BaseCard class="panel panel-left" tone="accent">
              <span class="label">{{ content.dashboard.patientCard.label }}</span>
              <strong>{{ content.dashboard.patientCard.title }}</strong>
              <p>{{ content.dashboard.patientCard.text }}</p>
            </BaseCard>

            <BaseCard class="panel panel-right">
              <span class="label">{{ content.dashboard.teamCard.label }}</span>
              <strong>{{ content.dashboard.teamCard.title }}</strong>
              <p>{{ content.dashboard.teamCard.text }}</p>
            </BaseCard>
          </div>

          <div class="highlights">
            <div v-for="item in content.highlights" :key="item.label" class="highlight-item">
              <strong>{{ item.value }}</strong>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  z-index: 1;
  padding: 5rem 0 4rem;
  overflow: hidden;
}

/* ── Ambient glows ── */
.hero-glow-top {
  position: absolute;
  top: -30%;
  left: 30%;
  width: 60vw;
  height: 60vw;
  max-width: 800px;
  max-height: 800px;
  background: radial-gradient(ellipse, rgba(5, 232, 240, 0.12) 0%, rgba(5, 232, 240, 0.035) 35%, transparent 60%);
  pointer-events: none;
  z-index: 0;
  animation: heroGlowPulse 10s ease-in-out infinite;
}

.hero-glow-right {
  position: absolute;
  top: 5%;
  right: -15%;
  width: 40vw;
  height: 40vw;
  max-width: 550px;
  max-height: 550px;
  background: radial-gradient(ellipse, rgba(20, 114, 255, 0.1) 0%, rgba(20, 114, 255, 0.03) 35%, transparent 60%);
  pointer-events: none;
  z-index: 0;
  animation: heroGlowPulse 14s ease-in-out infinite 2s;
}

@keyframes heroGlowPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}

/* ── Grid layout ── */
.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  gap: 3rem;
  align-items: start;
  position: relative;
  z-index: 1;
}

/* ── Left side: copy ── */
.hero-copy {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding-top: 2.5rem;
}

.hero-badge {
  align-self: flex-start;
}

.hero-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3.2vw, 3.2rem);
  line-height: 1.04;
  letter-spacing: -0.04em;
  font-weight: 760;
}

.title-gradient {
  display: inline;
  background: linear-gradient(
    135deg,
    var(--color-text) 0%,
    var(--color-text) 40%,
    var(--color-brand-strong) 80%,
    var(--color-brand-accent) 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientText 8s ease-in-out infinite;
}

.title-typed {
  position: relative;
}

.title-typed.typing::after {
  content: "";
  display: inline-block;
  width: 0.08em;
  height: 0.92em;
  margin-left: 0.08em;
  vertical-align: -0.08em;
  border-radius: 999px;
  background: rgba(136, 205, 255, 0.92);
  animation: caretBlink 900ms steps(1) infinite;
}

@keyframes gradientText {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes caretBlink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.hero-desc {
  max-width: 34rem;
  margin: 0;
  color: var(--color-text-soft);
  font-size: 1.02rem;
  line-height: 1.85;
  letter-spacing: 0.005em;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  padding-top: 0.25rem;
}

.micro-proof {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  color: var(--color-text-soft);
  font-size: 0.88rem;
  max-width: 34rem;
  line-height: 1.65;
}

.proof-line {
  width: 2.8rem;
  height: 2px;
  margin-top: 0.65rem;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--color-brand-strong), var(--color-brand-accent));
  flex-shrink: 0;
}

.trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  max-width: 36rem;
}

/* ── Right side: visual ── */
.hero-visual {
  position: relative;
  min-height: 40rem;
}

.hero-illustration {
  position: absolute;
  inset: 0 0.5rem 2rem 0.5rem;
  border-radius: var(--radius-xl);
  background:
    radial-gradient(circle at 22% 24%, rgba(5, 232, 240, 0.11), transparent 28%),
    radial-gradient(circle at 78% 20%, rgba(20, 114, 255, 0.11), transparent 28%),
    radial-gradient(circle at 50% 80%, rgba(14, 180, 245, 0.05), transparent 35%),
    linear-gradient(180deg, rgba(10, 18, 32, 0.5), rgba(10, 18, 32, 0.1));
  pointer-events: none;
  border: 1px solid var(--glass-border-subtle);
  overflow: hidden;
  box-shadow: 0 0 80px rgba(5, 232, 240, 0.05), 0 0 160px rgba(20, 114, 255, 0.04);
}

.hero-illustration::before {
  content: "";
  position: absolute;
  inset: 1rem;
  border-radius: calc(var(--radius-xl) - 0.5rem);
  border: 1px solid var(--glass-border-subtle);
  opacity: 0.4;
}

.grid-trace {
  position: absolute;
  inset: 1.5rem;
  border-radius: var(--radius-lg);
  background-image:
    linear-gradient(rgba(20, 114, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(5, 232, 240, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(circle at center, black 25%, transparent 75%);
  opacity: 0.5;
}

.vital-line {
  position: absolute;
  left: 9%;
  right: 9%;
  bottom: 18%;
  height: 4rem;
  opacity: 0.45;
}

.vital-segment {
  position: absolute;
  top: 50%;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(5, 232, 240, 0.18), rgba(20, 114, 255, 0.62));
  animation: pulseGlow 5s ease-in-out infinite;
}

.segment-a {
  left: 0;
  width: 34%;
  transform: translateY(-50%) skewX(-44deg);
}

.segment-c {
  right: 0;
  width: 56%;
  transform: translateY(-50%);
  animation-delay: 2.5s;
}

.orb-a {
  top: 2.5rem;
  right: 2rem;
  width: 6.5rem;
  height: 6.5rem;
  animation: floatY 10s ease-in-out infinite;
}

.pulse-ring {
  position: absolute;
  border-radius: 999px;
  border: 1px solid rgba(136, 205, 255, 0.08);
}

.pulse-ring-a {
  top: 1rem;
  left: 2rem;
  width: 13rem;
  height: 13rem;
  animation: gentlePulse 8s ease-in-out infinite;
}

/* ── Dashboard card ── */
.dashboard-card {
  position: relative;
  z-index: 2;
  padding: 1.4rem;
}

.dashboard-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.dashboard-header strong {
  display: block;
  font-size: 1rem;
}

.dashboard-header p {
  margin: 0.2rem 0 0;
  color: var(--color-text-muted);
  font-size: 0.82rem;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
  gap: 0.65rem;
}

.dash-metric,
.dash-signal,
.dash-statuses {
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border-subtle);
  background: rgba(255, 255, 255, 0.02);
  padding: 0.9rem;
}

.dash-metric {
  min-height: 8.5rem;
}

.metric-value {
  display: block;
  margin-top: 0.5rem;
  font-family: var(--font-display);
  font-size: 2rem;
  line-height: 1;
  background: linear-gradient(135deg, var(--color-brand-strong), var(--color-brand-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dash-signal strong {
  display: block;
  margin-top: 0.4rem;
  font-size: 1.05rem;
  line-height: 1.25;
}

.label {
  color: var(--color-text-muted);
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.dash-metric p,
.dash-signal p {
  margin: 0.4rem 0 0;
  color: var(--color-text-muted);
  font-size: 0.82rem;
}

.dash-statuses {
  display: grid;
  gap: 0.55rem;
  align-content: start;
}

.status-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.88rem;
}

.status-dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
}

.status-row.green .status-dot {
  background: #34d399;
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.35);
}

.status-row.amber .status-dot {
  background: #fbbf24;
  box-shadow: 0 0 8px rgba(251, 191, 36, 0.35);
}

.status-row.red .status-dot {
  background: #f87171;
  box-shadow: 0 0 8px rgba(248, 113, 113, 0.35);
}

.status-row strong {
  font-family: var(--font-display);
  font-weight: 700;
}

/* ── Floating panels ── */
.floating-panels {
  position: absolute;
  inset: auto 0 3.5rem;
  z-index: 3;
  pointer-events: none;
}

.panel {
  position: absolute;
  width: min(13.5rem, 44%);
  padding: 0.9rem 1rem;
}

.panel strong {
  display: block;
  margin-top: 0.3rem;
  font-size: 0.92rem;
}

.panel p {
  margin: 0.3rem 0 0;
  color: var(--color-text-muted);
  font-size: 0.8rem;
  line-height: 1.5;
}

.panel-left {
  left: -0.5rem;
  bottom: 2rem;
  animation: floatY 8s ease-in-out infinite;
}

.panel-right {
  right: -0.5rem;
  bottom: 1.5rem;
  animation: floatY 10s ease-in-out infinite;
  animation-delay: 3s;
}

/* ── Highlights ── */
.highlights {
  position: absolute;
  right: 0.5rem;
  bottom: -0.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
  width: min(100%, 26rem);
  z-index: 4;
}

.highlight-item {
  padding: 0.75rem 0.8rem;
  text-align: center;
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border);
  background: var(--glass-bg-strong);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: transform 280ms var(--ease-spring), border-color 280ms ease, box-shadow 280ms ease;
}

.highlight-item:hover {
  transform: translateY(-2px);
  border-color: var(--glass-border-hover);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.highlight-item strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-brand-strong), var(--color-brand-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.highlight-item span {
  display: block;
  margin-top: 0.15rem;
  color: var(--color-text-muted);
  font-size: 0.72rem;
  line-height: 1.3;
}

/* ── Entrance ── */
.hero-entrance {
  opacity: 0;
  transform: translateY(24px);
  animation: heroRise 900ms var(--ease-spring) forwards;
}

.hero-entrance.delay-1 {
  animation-delay: 200ms;
}

@keyframes heroRise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-copy { padding-top: 0; }

  .hero-visual {
    min-height: auto;
    padding-bottom: 9rem;
  }
}

@media (max-width: 720px) {
  .hero-section { padding-top: 2.5rem; }

  .hero-title {
    font-size: 1.82rem;
    line-height: 1.08;
  }

  .hero-desc {
    font-size: 0.95rem;
    line-height: 1.65;
  }

  .dashboard-grid,
  .highlights {
    grid-template-columns: 1fr;
  }

  .floating-panels, .panel {
    position: static;
    width: 100%;
    margin-top: 0.65rem;
    pointer-events: auto;
    animation: none;
  }

  .hero-visual { padding-bottom: 0; }

  .hero-illustration { inset: 0.25rem 0 0 0; }

  .highlights {
    position: static;
    width: 100%;
    margin-top: 0.65rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-entrance, .orb, .panel,
  .dashboard-card, .vital-segment,
  .pulse-ring-a, .title-gradient,
  .title-typed.typing::after,
  .hero-glow-top, .hero-glow-right {
    opacity: 1;
    transform: none;
    animation: none;
  }

  .title-gradient {
    background-size: 100% 100%;
  }
}
</style>
