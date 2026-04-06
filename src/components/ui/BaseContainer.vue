<template>
  <div class="base-container" :class="{ narrow }">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  narrow: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.base-container {
  width: min(1280px, calc(100% - 2.5rem));
  margin: 0 auto;
}

.base-container.narrow {
  width: min(1120px, calc(100% - 2.5rem));
}

@media (max-width: 640px) {
  .base-container,
  .base-container.narrow {
    width: min(100% - 1.5rem, 1180px);
  }
}
</style>
