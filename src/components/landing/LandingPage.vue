<script setup>
import { computed, watchEffect } from "vue";
import { useCursorGlow } from "../../composables/useCursorGlow";
import { useLocale } from "../../composables/useLocale";
import AuroraBackground from "../ui/AuroraBackground.vue";
import BenefitsSection from "./BenefitsSection.vue";
import CtaSection from "./CtaSection.vue";
import FaqSection from "./FaqSection.vue";
import FeaturesSection from "./FeaturesSection.vue";
import HeroSection from "./HeroSection.vue";
import LandingFooter from "./LandingFooter.vue";
import LandingHeader from "./LandingHeader.vue";
import MediaSection from "./MediaSection.vue";
import ProblemSolutionSection from "./ProblemSolutionSection.vue";
import StatsSection from "./StatsSection.vue";
import UseCasesSection from "./UseCasesSection.vue";
import WorkflowSection from "./WorkflowSection.vue";

const { locale, locales, content, setLocale } = useLocale();
const { isActive: cursorActive } = useCursorGlow();

const localeOptions = computed(() =>
  locales.map((value) => ({
    value,
    label: value.toUpperCase(),
  })),
);

watchEffect(() => {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale.value;
  document.title = content.value.meta.title;
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute("content", content.value.meta.description);
});
</script>

<template>
  <div class="page-shell">
    <!-- Background layers -->
    <AuroraBackground />
    <div class="page-vignette" aria-hidden="true" />

    <!-- Cursor glow -->
    <div class="cursor-glow" :class="{ 'is-active': cursorActive }" aria-hidden="true" />

    <!-- Content -->
    <LandingHeader
      :content="content.header"
      :locale="locale"
      :locale-options="localeOptions"
      @update:locale="setLocale"
    />
    <HeroSection :content="content.hero" />
    <ProblemSolutionSection :content="content.problemSolution" />
    <StatsSection :content="content.stats" />
    <FeaturesSection :content="content.features" />
    <BenefitsSection :content="content.benefits" />
    <WorkflowSection :content="content.workflow" />
    <UseCasesSection :content="content.useCases" />
    <MediaSection :content="content.media" />
    <FaqSection :content="content.faq" />
    <CtaSection :content="content.cta" />
    <LandingFooter :content="content.footer" />
  </div>
</template>

<style scoped>
.page-shell {
  position: relative;
  overflow: clip;
  min-height: 100vh;
}

:deep(section:not(.hero-section)) {
  content-visibility: auto;
  contain-intrinsic-size: 780px;
}

:deep(footer) {
  content-visibility: auto;
  contain-intrinsic-size: 240px;
}

.page-vignette {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.05), transparent 35%),
    radial-gradient(ellipse at 20% 50%, rgba(90, 227, 207, 0.015), transparent 50%),
    radial-gradient(ellipse at 80% 50%, rgba(122, 182, 255, 0.015), transparent 50%),
    radial-gradient(circle at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.38) 100%);
  pointer-events: none;
  z-index: 0;
}

@media (prefers-reduced-motion: reduce) {
  .cursor-glow { display: none; }
}
</style>
