<script setup>
import { ref } from "vue";
import BaseButton from "../ui/BaseButton.vue";
import BaseContainer from "../ui/BaseContainer.vue";

const props = defineProps({
  content: { type: Object, required: true },
  locale: { type: String, required: true },
  localeOptions: { type: Array, default: () => [] },
});

const emit = defineEmits(["update:locale"]);
const isOpen = ref(false);

const toggleMenu = () => { isOpen.value = !isOpen.value; };
const closeMenu = () => { isOpen.value = false; };
</script>

<template>
  <header class="header-shell">
    <BaseContainer>
      <div class="header-bar">
        <!-- Brand -->
        <a class="brand" href="#hero" @click="closeMenu">
          <span class="brand-mark">
            <svg width="24" height="24" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.4847 43.045L35.3615 43.1273C34.7865 43.4979 34.2115 43.8478 33.575 44.136C32.3018 44.7742 30.967 45.3095 29.6116 45.7006C27.5376 46.2976 25.4019 46.5858 23.2458 46.5858C16.8183 46.5858 11.0068 43.9919 6.79712 39.7718C2.60796 35.5517 0 29.726 0 23.3032C0 16.8598 2.60796 11.034 6.79712 6.81393C11.0068 2.6144 16.8183 0 23.2458 0C29.6527 0 35.4642 2.6144 39.6739 6.81393C43.8836 11.034 46.471 16.8598 46.471 23.3032C46.471 25.5059 46.163 27.7086 45.5469 29.8289C44.9514 31.8051 44.0684 33.6784 43.0416 35.4694C42.9184 35.6958 42.672 35.737 42.4667 35.6135L39.0784 33.452C38.8114 33.3079 38.8525 33.0609 39.0373 32.7315C39.8176 31.3728 40.4542 29.9524 40.8854 28.4702C41.3577 26.8233 41.6247 25.0736 41.6247 23.3032C41.6247 18.2185 39.5506 13.6073 36.224 10.2723C32.9178 6.93741 28.3179 4.87884 23.2458 4.87884C18.1736 4.87884 13.5737 6.93741 10.247 10.2723C6.92032 13.6073 4.86682 18.2185 4.86682 23.3032C4.86682 28.3879 6.92032 32.9991 10.247 36.3134C13.5737 39.6484 18.1736 41.7275 23.2458 41.7275C24.9502 41.7275 26.6546 41.4805 28.2768 41.007C28.4617 40.9658 28.6671 40.9041 28.8519 40.8423L28.7492 40.8012C27.784 39.6689 18.8307 36.3546 15.8326 33.7402C15.0112 33.0197 14.4156 32.608 13.7585 31.8669C11.2738 29.1084 9.58991 25.9794 9.36404 22.1916C9.30244 16.2834 12.7318 12.2486 17.6807 12.0839C19.6932 12.0221 22.0547 13.175 23.0815 12.9897C25.1555 12.6397 25.6073 11.8369 28.3795 12.1456C33.5339 12.7015 36.2034 17.3539 35.8954 22.8503C35.5669 25.7735 33.924 29.7877 32.0964 30.8788C32.0348 30.8993 28.0715 29.7054 28.0099 28.5937C27.9483 27.7086 31.0286 25.9587 30.8848 20.7299C29.1804 13.5866 24.0466 19.4948 21.8083 18.5479C20.3709 17.9508 18.3789 16.3246 16.3049 17.5803C12.7318 19.7624 15.0522 25.5059 17.1263 28.0585C17.1673 28.0997 17.2084 28.1409 17.2495 28.2026C18.7075 30.0347 22.1779 31.908 24.4574 32.9785C27.0653 34.1725 29.8375 35.4488 32.3223 36.7252C36.9838 38.969 40.3515 39.6072 36.3267 42.4686C36.0391 42.6745 35.7722 42.8598 35.4847 43.045Z" fill="url(#paint0_linear_957_10470)"/>
                <defs>
                <linearGradient id="paint0_linear_957_10470" x1="33.1891" y1="36.1183" x2="9.18239" y2="0.253126" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1472FF"/>
                <stop offset="1" stop-color="#05E8F0"/>
                </linearGradient>
                </defs>
                </svg>
          </span>
          <span class="brand-text">
            <strong>qMed AI</strong>
            <small>{{ props.content.brandSubtitle }}</small>
          </span>
        </a>

        <!-- Desktop nav -->
        <nav class="nav-links" aria-label="Main navigation">
          <a v-for="item in props.content.navigation" :key="item.href" :href="item.href">{{ item.label }}</a>
        </nav>

        <!-- Desktop controls -->
        <div class="desktop-controls">
          <div class="locale-switch" :aria-label="props.content.languageLabel" role="group">
            <button
              v-for="option in props.localeOptions"
              :key="option.value"
              class="locale-pill"
              :class="{ active: props.locale === option.value }"
              type="button"
              @click="emit('update:locale', option.value)"
            >
              {{ option.label }}
            </button>
          </div>
          <BaseButton href="#contact" size="sm">{{ props.content.cta }}</BaseButton>
        </div>

        <!-- Mobile toggle -->
        <button class="menu-toggle" type="button" :aria-label="props.content.menuLabel" :aria-expanded="isOpen" @click="toggleMenu">
          <span class="bar" :class="{ open: isOpen }" />
          <span class="bar" :class="{ open: isOpen }" />
        </button>
      </div>

      <!-- Mobile menu -->
      <transition name="slide-down">
        <div v-if="isOpen" class="mobile-menu">
          <div class="mobile-locale-head">{{ props.content.languageLabel }}</div>
          <div class="locale-switch mobile-locale" :aria-label="props.content.languageLabel" role="group">
            <button
              v-for="option in props.localeOptions"
              :key="option.value"
              class="locale-pill"
              :class="{ active: props.locale === option.value }"
              type="button"
              @click="emit('update:locale', option.value)"
            >
              {{ option.label }}
            </button>
          </div>
          <a v-for="item in props.content.navigation" :key="item.href" :href="item.href" @click="closeMenu">
            {{ item.label }}
          </a>
          <BaseButton href="#contact" block @click="closeMenu">{{ props.content.cta }}</BaseButton>
        </div>
      </transition>
    </BaseContainer>
  </header>
</template>

<style scoped>
.header-shell {
  position: sticky;
  top: 0;
  z-index: 30;
  padding-top: 0.85rem;
}

.header-bar,
.mobile-menu {
  border: 1px solid var(--glass-border);
  background: rgba(6, 14, 26, 0.75);
  backdrop-filter: blur(20px) saturate(1.3);
  -webkit-backdrop-filter: blur(20px) saturate(1.3);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  min-height: 3.8rem;
  padding: 0.4rem 0.65rem 0.4rem 0.9rem;
  border-radius: var(--radius-xl);
  position: relative;
}

/* Top shine line */
.header-bar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(90, 227, 207, 0.25), rgba(176, 211, 255, 0.4), rgba(122, 182, 255, 0.25), transparent);
}

/* Brand */
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  min-width: 0;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.8rem;
  background-color: #fff;
  color: #04111d;
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 800;
  box-shadow: 0 2px 8px rgba(90, 227, 207, 0.2);
}

.brand-mark svg {
  width: 2rem;
  height: 2rem;
}


.brand-text { display: grid; gap: 0; }
.brand-text strong { font-family: var(--font-display); font-size: 0.9rem; font-weight: 800; }
.brand-text small { color: var(--color-text-muted); font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase; }

/* Nav links */
.nav-links {
  display: inline-flex;
  gap: 0.1rem;
}

.nav-links a {
  color: var(--color-text-muted);
  font-weight: 600;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  transition: color 200ms ease, background 200ms ease;
}

.nav-links a:hover {
  color: var(--color-text);
  background: rgba(122, 182, 255, 0.07);
}

/* Desktop controls */
.desktop-controls {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.locale-switch {
  display: inline-grid;
  grid-auto-flow: column;
  padding: 0.15rem;
  border: 1px solid var(--glass-border-subtle);
  border-radius: 999px;
  background: rgba(10, 18, 32, 0.5);
  transition: border-color 200ms ease;
}

.locale-switch:hover {
  border-color: var(--glass-border);
}

.locale-pill {
  border: 0;
  background: transparent;
  color: var(--color-text-muted);
  border-radius: 999px;
  padding: 0.35rem 0.65rem;
  font-size: 0.72rem;
  font-weight: 600;
  transition: background 200ms ease, color 200ms ease;
}

.locale-pill.active {
  background: rgba(90, 227, 207, 0.12);
  color: var(--color-brand-strong);
}

.locale-pill:hover { color: var(--color-text); }

.locale-pill:focus-visible {
  outline: 2px solid rgba(90, 227, 207, 0.4);
  outline-offset: 2px;
}

.mobile-locale { min-width: 100%; }
.mobile-locale-head { color: var(--color-text-muted); font-size: 0.82rem; font-weight: 600; }

/* Menu toggle */
.menu-toggle {
  display: none;
  width: 2.2rem;
  height: 2.2rem;
  padding: 0;
  border: 0;
  border-radius: 0.65rem;
  background: rgba(122, 182, 255, 0.06);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.28rem;
  transition: background 220ms ease, transform 220ms ease, box-shadow 220ms ease;
}

.menu-toggle:hover {
  background: rgba(122, 182, 255, 0.1);
  box-shadow: 0 10px 24px rgba(8, 18, 36, 0.22);
}

.menu-toggle:active {
  transform: scale(0.96);
}

.bar {
  display: block;
  width: 0.95rem;
  height: 1.5px;
  border-radius: 999px;
  background: var(--color-text-soft);
  transform-origin: center;
  transition: transform 320ms var(--ease-spring), opacity 220ms ease, background 220ms ease;
}

.bar.open:first-child { transform: translateY(3.5px) rotate(45deg); }
.bar.open:last-child { transform: translateY(-3.5px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  display: grid;
  gap: 0.65rem;
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: var(--radius-lg);
  transform-origin: top center;
  overflow: hidden;
}

.mobile-menu a {
  font-weight: 600;
  padding: 0.55rem 0.5rem;
  border-radius: var(--radius-sm);
  transition: background 200ms ease;
}

.mobile-menu a:hover {
  background: rgba(122, 182, 255, 0.06);
}

/* Transitions */
.slide-down-enter-active,
.slide-down-leave-active {
  transition:
    opacity 280ms ease,
    transform 320ms var(--ease-spring),
    max-height 320ms var(--ease-spring),
    margin-top 280ms ease,
    padding-top 280ms ease,
    padding-bottom 280ms ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px) scaleY(0.96);
  max-height: 0;
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0) scaleY(1);
  max-height: 26rem;
}

@media (max-width: 960px) {
  .nav-links, .desktop-controls { display: none; }
  .menu-toggle { display: flex; }
}

@media (prefers-reduced-motion: reduce) {
  .slide-down-enter-active, .slide-down-leave-active { transition: none; }
  .locale-switch, .locale-pill, .nav-links a, .bar, .menu-toggle { transition: none; }
}
</style>
