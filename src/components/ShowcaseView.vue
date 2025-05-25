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
import DatePicker from '@/components/DateRangePicker.vue'
import CodeExample from '@/components/CodeExample.vue'
import { type IDatePickerProps } from '@/types/DatePicker';

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
    flex-wrap: wrap;
    gap: 48px;
    height: 100%;
    width: 100%;
  }
}
</style>
