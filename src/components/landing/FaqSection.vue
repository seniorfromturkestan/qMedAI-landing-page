<script setup>
import BaseAccordion from "../ui/BaseAccordion.vue";
import BaseSection from "../ui/BaseSection.vue";

defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <BaseSection
    id="faq"
    :eyebrow="content.eyebrow"
    :title="content.title"
    :description="content.description"
  >
    <BaseAccordion :items="content.items" />
  </BaseSection>
</template>
