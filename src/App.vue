<template>
  <main class="app">
    <ShowcaseView
      v-for="example in datePickerExamples"
      :key="example.id"
      :title="example.title"
      :datePickerProps="example.datePicker"
    />
  </main>
</template>

<script setup lang="ts">
import ShowcaseView from '@/components/ShowcaseView.vue'
import datePickerExamples from '@/demo/datePickerExamples.ts'

</script>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;

  .showcase-view:nth-child(1) {
    background-color: $color-first-example;
  }

  .showcase-view:nth-child(2) {
    background-color: $color-second-example;
  }

  .showcase-view:nth-child(3) {
    background-color: $color-third-example;
  }

  .showcase-view:nth-child(4) {
    background-color: $color-forth-example;
  }
}
</style>
