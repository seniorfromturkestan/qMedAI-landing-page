<script setup>
import { computed, reactive, ref } from "vue";
import BaseButton from "../ui/BaseButton.vue";
import BaseCard from "../ui/BaseCard.vue";
import BaseSection from "../ui/BaseSection.vue";

defineProps({
  content: {
    type: Object,
    required: true,
  },
});

const form = reactive({
  organization: "",
  phone: "",
  context: "",
});

const submittedData = ref(null);
const isModalOpen = ref(false);

const digitsOnly = computed(() => form.phone.replace(/\D/g, ""));

const formatPhone = (value) => {
  const digits = value.replace(/\D/g, "").replace(/^8/, "7").slice(0, 11);
  const normalized = digits.startsWith("7") ? digits : `7${digits}`.slice(0, 11);

  let result = "+7";

  if (normalized.length > 1) {
    result += ` (${normalized.slice(1, 4)}`;
  }

  if (normalized.length >= 4) {
    result += `) ${normalized.slice(4, 7)}`;
  }

  if (normalized.length >= 7) {
    result += `-${normalized.slice(7, 9)}`;
  }

  if (normalized.length >= 9) {
    result += `-${normalized.slice(9, 11)}`;
  }

  return result;
};

const onPhoneInput = (event) => {
  form.phone = formatPhone(event.target.value);
};

const submitForm = () => {
  if (digitsOnly.value.length !== 11) {
    return;
  }

  submittedData.value = {
    organization: form.organization.trim(),
    phone: form.phone,
    context: form.context.trim(),
  };

  isModalOpen.value = true;
  form.organization = "";
  form.phone = "+7";
  form.context = "";
};

const closeModal = () => {
  isModalOpen.value = false;
};

form.phone = "+7";
</script>

<template>
  <BaseSection
    id="contact"
    immediate
    :eyebrow="content.kicker"
  >
    <BaseCard class="cta-shell reveal-child" tone="deep" elevated>
      <div class="cta-glow" aria-hidden="true" />
      <div class="cta-copy">
        <h2>{{ content.title }}</h2>
        <p class="cta-desc">{{ content.description }}</p>
      </div>

      <form class="cta-form" @submit.prevent="submitForm">
        <label>
          <span>{{ content.organizationLabel }}</span>
          <input v-model="form.organization" type="text" :placeholder="content.organizationPlaceholder" />
        </label>

        <label>
          <span>{{ content.contactLabel }}</span>
          <input
            :value="form.phone"
            type="tel"
            inputmode="tel"
            maxlength="18"
            :placeholder="content.contactPlaceholder"
            @input="onPhoneInput"
          />
        </label>

        <label>
          <span>{{ content.contextLabel }}</span>
          <textarea v-model="form.context" rows="4" :placeholder="content.contextPlaceholder" />
        </label>

        <div class="cta-actions">
          <BaseButton tag="button" type="submit" block :class="{ disabled: digitsOnly.length !== 11 }">
            {{ content.primaryButton }}
          </BaseButton>
        </div>
      </form>
    </BaseCard>

    <teleport to="body">
      <transition name="modal-fade">
        <div v-if="isModalOpen" class="success-modal" @click.self="closeModal">
          <div class="success-dialog">
            <div class="success-orbit success-orbit-one" aria-hidden="true" />
            <div class="success-orbit success-orbit-two" aria-hidden="true" />
            <div class="success-badge" aria-hidden="true">
              <span />
            </div>
            <h3>{{ content.successTitle }}</h3>
            <p>{{ content.successText }}</p>
            <div class="success-data" v-if="submittedData">
              <span>{{ submittedData.organization || content.successFallbackOrganization }}</span>
              <span>{{ submittedData.phone }}</span>
              <span>{{ submittedData.context || content.successFallbackContext }}</span>
            </div>
            <BaseButton tag="button" type="button" @click="closeModal">{{ content.successButton }}</BaseButton>
          </div>
        </div>
      </transition>
    </teleport>
  </BaseSection>
</template>

<style scoped>
.cta-shell {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
  gap: 2.5rem;
  padding: 2.5rem;
}

.cta-glow {
  position: absolute;
  inset: auto -10% -25% auto;
  width: 28rem;
  height: 28rem;
  background: radial-gradient(circle, rgba(90, 227, 207, 0.12) 0%, rgba(122, 182, 255, 0.04) 40%, transparent 60%);
  filter: blur(24px);
  pointer-events: none;
  animation: pulseGlow 6s ease-in-out infinite;
}

.cta-copy {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cta-copy h2 {
  margin: 0;
  max-width: 14ch;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 3rem);
  line-height: 1.05;
  font-weight: 800;
}

.cta-desc {
  max-width: 36rem;
  color: rgba(255, 255, 255, 0.58);
  line-height: 1.8;
  margin-top: 1rem;
  font-size: 0.95rem;
}

.cta-form {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 0.9rem;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(176, 211, 255, 0.08);
}

.cta-form label {
  display: grid;
  gap: 0.35rem;
}

.cta-form span {
  font-size: 0.74rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.58);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.cta-form input,
.cta-form textarea {
  width: 100%;
  border: 1px solid rgba(176, 211, 255, 0.1);
  border-radius: 18px;
  padding: 0.95rem 1rem;
  background: rgba(8, 16, 28, 0.72);
  color: var(--color-text);
  resize: vertical;
  transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;
}

.cta-form input::placeholder,
.cta-form textarea::placeholder {
  color: rgba(219, 229, 245, 0.3);
}

.cta-form input:focus,
.cta-form textarea:focus {
  outline: none;
  transform: translateY(-1px);
  border-color: rgba(90, 227, 207, 0.35);
  box-shadow: 0 0 0 3px rgba(90, 227, 207, 0.08), 0 0 20px rgba(90, 227, 207, 0.04);
}

.cta-actions {
  margin-top: 0.35rem;
}

.cta-actions :deep(.base-button.disabled) {
  opacity: 0.7;
  pointer-events: none;
}

.success-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  background: rgba(3, 8, 16, 0.7);
  backdrop-filter: blur(18px);
}

.success-dialog {
  position: relative;
  width: min(32rem, 100%);
  padding: 2.25rem;
  border-radius: 2rem;
  overflow: hidden;
  background:
    radial-gradient(circle at top, rgba(90, 227, 207, 0.14), transparent 38%),
    linear-gradient(180deg, rgba(10, 18, 32, 0.98), rgba(6, 12, 22, 0.98));
  border: 1px solid rgba(176, 211, 255, 0.14);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.45);
  text-align: center;
}

.success-orbit {
  position: absolute;
  border-radius: 999px;
  border: 1px solid rgba(90, 227, 207, 0.12);
  pointer-events: none;
}

.success-orbit-one {
  inset: 1.1rem;
  animation: rotateOrbit 12s linear infinite;
}

.success-orbit-two {
  inset: 2rem;
  border-color: rgba(122, 182, 255, 0.12);
  animation: rotateOrbit 18s linear infinite reverse;
}

.success-badge {
  position: relative;
  display: grid;
  place-items: center;
  width: 5.5rem;
  height: 5.5rem;
  margin: 0 auto 1.2rem;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.26), rgba(90, 227, 207, 0.12));
  box-shadow: 0 0 40px rgba(90, 227, 207, 0.22);
}

.success-badge::before {
  content: "";
  position: absolute;
  inset: -0.45rem;
  border-radius: inherit;
  border: 1px solid rgba(90, 227, 207, 0.22);
  animation: gentlePulse 2s ease-in-out infinite;
}

.success-badge span {
  width: 1.2rem;
  height: 2rem;
  border-right: 3px solid #04111d;
  border-bottom: 3px solid #04111d;
  transform: rotate(45deg) translate(-0.15rem, -0.15rem);
}

.success-dialog h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  line-height: 1.05;
}

.success-dialog p {
  margin: 0.9rem auto 1.2rem;
  max-width: 28rem;
  color: var(--color-text-muted);
  line-height: 1.75;
}

.success-data {
  display: grid;
  gap: 0.55rem;
  margin: 0 0 1.4rem;
}

.success-data span {
  display: inline-flex;
  justify-content: center;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(176, 211, 255, 0.1);
  color: var(--color-text-soft);
  font-size: 0.86rem;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 260ms ease;
}

.modal-fade-enter-active .success-dialog,
.modal-fade-leave-active .success-dialog {
  transition: transform 260ms var(--ease-spring), opacity 260ms ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .success-dialog,
.modal-fade-leave-to .success-dialog {
  opacity: 0;
  transform: translateY(18px) scale(0.96);
}

@keyframes rotateOrbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 720px) {
  .cta-shell {
    grid-template-columns: 1fr;
    gap: 1.4rem;
    padding: 1.4rem;
  }

  .cta-copy h2 {
    max-width: none;
  }

  .success-dialog {
    padding: 1.6rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cta-glow,
  .success-orbit,
  .success-badge::before {
    animation: none;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active,
  .modal-fade-enter-active .success-dialog,
  .modal-fade-leave-active .success-dialog {
    transition: none;
  }
}
</style>
