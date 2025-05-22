<template>
  <DatePicker
    :allowedTypes="[
      'year',
      'quarter',
      'month',
      'week',
      'day',
      'hour',
      'minute',
      'date from-to',
      'date-from',
      'date-to',
    ]"
    :disabledTypes="['week']"
    :min="1"
    :max="100"
    minDate="2022-01-01"
    maxDate="2025-12-31"
  />
</template>

<script setup lang="ts">
import DatePicker from './components/DatePicker.vue'
</script>
