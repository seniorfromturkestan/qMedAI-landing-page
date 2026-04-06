<script setup>
import BaseContainer from "../ui/BaseContainer.vue";

defineProps({
  content: {
    type: Object,
    required: true,
  },
});

const socialIcons = {
  instagram:
    "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm9.5 2.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.2A2.8 2.8 0 1 1 12 14.8 2.8 2.8 0 0 1 12 9.2z",
  linkedin:
    "M5 8.5h3V22H5V8.5zM6.5 2A2 2 0 1 1 6.5 6a2 2 0 0 1 0-4zM10.5 8.5h2.9v1.8h.1c.4-.8 1.4-2.1 3.7-2.1 4 0 4.8 2.6 4.8 6V22h-3.1v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V22h-3.1V8.5z",
};

const storeIcons = {
  appStore:
    "M16.6 12.3c0-2.2 1.8-3.2 1.9-3.3-1-1.5-2.7-1.7-3.3-1.8-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.1 9  .7 1 1.6 2.2 2.8 2.2 1.1 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-.9 2.7-1.9.8-1.1 1.1-2.2 1.1-2.3-.1-.1-2.2-.8-2.2-3.3zM14.4 5.8c.6-.8 1-1.8.9-2.8-.9 0-2 .6-2.6 1.3-.6.7-1.1 1.8-.9 2.8 1 .1 2-.5 2.6-1.3z",
  googlePlay:
    "M4.8 3.2c-.3.3-.5.8-.5 1.5v14.6c0 .7.2 1.2.5 1.5l.1.1L13 13 4.9 3.1l-.1.1zm11 6.5-2.7 2.7 2.7 2.7 3.4-1.9c1-.6 1-.9 1-1.1 0-.2 0-.5-1-1.1l-3.4-1.9zm-.9-.5L6 4.1l6.8 8.2-6.8 8.2 8.9-5.1L12 12.3l2.9-3.1z",
};

const storeMeta = {
  appStore: { overline: "Download on the", title: "App Store" },
  googlePlay: { overline: "GET IT ON", title: "Google Play" },
};
</script>

<template>
  <footer class="footer-shell">
    <BaseContainer>
      <div class="footer-divider" />

      <div class="footer-grid">
        <div class="footer-column footer-brand">
          <div class="brand-mark">
            <svg width="24" height="24" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M35.4847 43.045L35.3615 43.1273C34.7865 43.4979 34.2115 43.8478 33.575 44.136C32.3018 44.7742 30.967 45.3095 29.6116 45.7006C27.5376 46.2976 25.4019 46.5858 23.2458 46.5858C16.8183 46.5858 11.0068 43.9919 6.79712 39.7718C2.60796 35.5517 0 29.726 0 23.3032C0 16.8598 2.60796 11.034 6.79712 6.81393C11.0068 2.6144 16.8183 0 23.2458 0C29.6527 0 35.4642 2.6144 39.6739 6.81393C43.8836 11.034 46.471 16.8598 46.471 23.3032C46.471 25.5059 46.163 27.7086 45.5469 29.8289C44.9514 31.8051 44.0684 33.6784 43.0416 35.4694C42.9184 35.6958 42.672 35.737 42.4667 35.6135L39.0784 33.452C38.8114 33.3079 38.8525 33.0609 39.0373 32.7315C39.8176 31.3728 40.4542 29.9524 40.8854 28.4702C41.3577 26.8233 41.6247 25.0736 41.6247 23.3032C41.6247 18.2185 39.5506 13.6073 36.224 10.2723C32.9178 6.93741 28.3179 4.87884 23.2458 4.87884C18.1736 4.87884 13.5737 6.93741 10.247 10.2723C6.92032 13.6073 4.86682 18.2185 4.86682 23.3032C4.86682 28.3879 6.92032 32.9991 10.247 36.3134C13.5737 39.6484 18.1736 41.7275 23.2458 41.7275C24.9502 41.7275 26.6546 41.4805 28.2768 41.007C28.4617 40.9658 28.6671 40.9041 28.8519 40.8423L28.7492 40.8012C27.784 39.6689 18.8307 36.3546 15.8326 33.7402C15.0112 33.0197 14.4156 32.608 13.7585 31.8669C11.2738 29.1084 9.58991 25.9794 9.36404 22.1916C9.30244 16.2834 12.7318 12.2486 17.6807 12.0839C19.6932 12.0221 22.0547 13.175 23.0815 12.9897C25.1555 12.6397 25.6073 11.8369 28.3795 12.1456C33.5339 12.7015 36.2034 17.3539 35.8954 22.8503C35.5669 25.7735 33.924 29.7877 32.0964 30.8788C32.0348 30.8993 28.0715 29.7054 28.0099 28.5937C27.9483 27.7086 31.0286 25.9587 30.8848 20.7299C29.1804 13.5866 24.0466 19.4948 21.8083 18.5479C20.3709 17.9508 18.3789 16.3246 16.3049 17.5803C12.7318 19.7624 15.0522 25.5059 17.1263 28.0585C17.1673 28.0997 17.2084 28.1409 17.2495 28.2026C18.7075 30.0347 22.1779 31.908 24.4574 32.9785C27.0653 34.1725 29.8375 35.4488 32.3223 36.7252C36.9838 38.969 40.3515 39.6072 36.3267 42.4686C36.0391 42.6745 35.7722 42.8598 35.4847 43.045Z" fill="url(#footerLogoGradient)"/>
              <defs>
                <linearGradient id="footerLogoGradient" x1="33.1891" y1="36.1183" x2="9.18239" y2="0.253126" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1472FF"/>
                  <stop offset="1" stop-color="#05E8F0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <strong>qMed AI</strong>
            <span>{{ content.brandTagline }}</span>
          </div>
        </div>

        <div class="footer-column">
          <span class="footer-label">{{ content.linksLabel }}</span>
          <nav class="footer-links">
            <a v-for="item in content.links" :key="item.href" :href="item.href">{{ item.label }}</a>
          </nav>
        </div>

        <div class="footer-column">
          <span class="footer-label">{{ content.contactsLabel }}</span>
          <div class="footer-contacts">
            <a :href="`tel:${content.phoneRaw}`">{{ content.phoneDisplay }}</a>
            <a :href="`mailto:${content.email}`">{{ content.email }}</a>
            <span>{{ content.address }}</span>
          </div>
        </div>

        <div class="footer-column">
          <span class="footer-label">{{ content.socialLinksLabel }}</span>
          <div class="footer-socials">
            <a
              v-for="item in content.socialLinks"
              :key="item.label"
              class="social-icon"
              :class="[ `social-${item.icon}`, { disabled: !item.href } ]"
              :href="item.href || undefined"
              :target="item.href ? '_blank' : undefined"
              rel="noreferrer"
              :aria-label="item.label"
              :aria-disabled="!item.href"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path :d="socialIcons[item.icon]" />
              </svg>
            </a>
          </div>

          <span class="footer-label store-label">{{ content.appLinksLabel }}</span>
          <div class="footer-stores">
            <a
              v-for="item in content.appLinks"
              :key="item.label"
              class="store-button"
              :class="{ disabled: !item.href }"
              :href="item.href || undefined"
              :target="item.href ? '_blank' : undefined"
              rel="noreferrer"
              :aria-disabled="!item.href"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path :d="storeIcons[item.icon]" />
              </svg>
              <span>
                <small>{{ storeMeta[item.icon].overline }}</small>
                <strong>{{ storeMeta[item.icon].title }}</strong>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>{{ content.copyright }}</span>
      </div>
    </BaseContainer>
  </footer>
</template>

<style scoped>
.footer-shell {
  position: relative;
  z-index: 1;
  padding-top: 4rem;
  padding-bottom: 2rem;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent 5%, rgba(90, 227, 207, 0.08) 25%, rgba(176, 211, 255, 0.14) 50%, rgba(122, 182, 255, 0.08) 75%, transparent 95%);
  margin-bottom: 2.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.6rem;
  align-items: start;
}

.footer-column {
  display: grid;
  gap: 0.95rem;
}

.footer-brand {
  grid-template-columns: auto 1fr;
  gap: 0.9rem;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 0.9rem;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(90, 227, 207, 0.15);
}

.brand-mark svg {
  width: 2rem;
  height: 2rem;
}

.footer-brand strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 800;
}

.footer-brand span {
  color: var(--color-text-muted);
  font-size: 0.88rem;
  line-height: 1.6;
}

.footer-label {
  color: var(--color-text-muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.footer-links,
.footer-contacts {
  display: grid;
  gap: 0.7rem;
}

.footer-links a,
.footer-contacts a,
.footer-contacts span {
  color: var(--color-text-soft);
  font-size: 0.92rem;
  line-height: 1.55;
  transition: color 220ms ease, transform 220ms ease;
}

.footer-links a:hover,
.footer-contacts a:hover {
  color: var(--color-brand-strong);
  transform: translateX(4px);
}

.footer-socials {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.social-icon {
  display: grid;
  place-items: center;
  width: 2.9rem;
  height: 2.9rem;
  border-radius: 999px;
  border: 1px solid rgba(176, 211, 255, 0.14);
  background: rgba(7, 14, 26, 0.46);
  transition: transform 220ms var(--ease-spring), border-color 220ms ease, box-shadow 220ms ease, background 220ms ease;
}

.social-icon svg {
  width: 1.1rem;
  height: 1.1rem;
  fill: var(--color-text);
  transition: fill 220ms ease;
}

.social-icon:hover {
  transform: translateY(-4px) scale(1.08);
  box-shadow: 0 12px 30px rgba(90, 227, 207, 0.18);
  border: none;
}



.social-instagram:hover {
  background: linear-gradient(135deg, #f9ce34, #ee2a7b 52%, #6228d7);
}

.social-linkedin:hover {
  background: linear-gradient(135deg, #0a66c2, #38bdf8);
}

.store-label {
  margin-top: 0.25rem;
}

.footer-stores {
  display: grid;
  gap: 0.75rem;
}

.store-button {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.8rem;
  min-height: 3.5rem;
  padding: 0.7rem 0.95rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: linear-gradient(180deg, rgba(10, 18, 32, 0.96), rgba(5, 12, 22, 0.96));
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.2);
  transition: transform 220ms var(--ease-spring), border-color 220ms ease, box-shadow 220ms ease;
}

.store-button svg {
  width: 1.45rem;
  height: 1.45rem;
  fill: currentColor;
}

.store-button span {
  display: grid;
  gap: 0.08rem;
}

.store-button small {
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.store-button strong {
  font-size: 1rem;
  font-weight: 700;
}

.store-button:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: rgba(90, 227, 207, 0.28);
  box-shadow: 0 18px 36px rgba(90, 227, 207, 0.12);
}

.disabled {
  opacity: 0.45;
  pointer-events: none;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(176, 211, 255, 0.08);
  color: var(--color-text-muted);
  font-size: 0.82rem;
}

@media (max-width: 1040px) {
  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    justify-content: flex-start;
  }
}
</style>
