import { computed, ref } from "vue";
import { defaultLocale, landingContent, locales } from "../content/landing";

const STORAGE_KEY = "qmed-locale";
const currentLocale = ref(defaultLocale);

if (typeof window !== "undefined") {
  const storedLocale = window.localStorage.getItem(STORAGE_KEY);
  if (storedLocale && locales.includes(storedLocale)) {
    currentLocale.value = storedLocale;
  } else {
    const browserLocale = window.navigator.language.slice(0, 2).toLowerCase();
    if (locales.includes(browserLocale)) {
      currentLocale.value = browserLocale;
    }
  }
}

export function useLocale() {
  const content = computed(() => landingContent[currentLocale.value] ?? landingContent[defaultLocale]);

  const setLocale = (locale) => {
    if (locales.includes(locale)) {
      currentLocale.value = locale;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, locale);
      }
    }
  };

  return {
    locale: currentLocale,
    locales,
    content,
    setLocale,
  };
}
