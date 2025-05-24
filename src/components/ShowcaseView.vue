<template>
  <section class="showcase-view">
    <h1>
      {{ props.title }}
    </h1>

    <div class="showcase-view-wrapper">
      <DatePicker v-bind="datePickerProps" />
      <CodeExample :datePickerProps="datePickerProps" />
    </div>
  </section>
</template>

<script setup lang="ts">
import DatePicker from '@/components/DatePicker.vue'
import CodeExample from '@/components/CodeExample.vue'

const props = defineProps<{
  title: string
  datePickerProps: IDatePickerProps
}>()
</script>

<style scoped lang="scss">
.showcase-view {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;

  &-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
  }
}
</style>
