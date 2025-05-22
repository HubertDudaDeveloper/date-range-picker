<template>
  <div class="date-range-picker">
    <label>Zakres:</label>
    <select v-model="rangeType" data-testid="range-type">
      <option
        v-for="option in props.allowedTypes"
        :key="option"
        :value="option"
        :disabled="props.disabledTypes.includes(option)"
      >
        {{ option }}
      </option>
    </select>

    <!-- tylko przy liczbowych zakresach -->
    <input
      v-if="isNumericType"
      type="number"
      v-model.number="value"
      :min="props.min"
      :max="props.max"
      data-testid="number-value"
    />

    <!-- obsługa dat -->
    <input
      v-if="showFrom"
      type="date"
      v-model="dateFrom"
      :min="props.minDate"
      :max="props.maxDate"
      data-testid="from-date"
    />

    <input
      v-if="showTo"
      type="date"
      v-model="dateTo"
      :min="props.minDate"
      :max="props.maxDate"
      data-testid="to-date"
    />

    <!-- podgląd danych -->
    <pre data-testid="json-output">{{ output }}</pre>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'

const props = defineProps<{
  allowedTypes: string[]
  disabledTypes: string[]
  min?: number
  max?: number
  minDate?: string
  maxDate?: string
}>()

const rangeType = ref('')
const value = ref(1)
const dateFrom = ref('')
const dateTo = ref('')

// TODO: rozważyć podział typu na enum

const isNumericType = computed(() =>
  ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute'].includes(rangeType.value),
)

const showFrom = computed(() => ['date from-to', 'date-from'].includes(rangeType.value))

const showTo = computed(() => ['date from-to', 'date-to'].includes(rangeType.value))

const output = computed(() => {
  return JSON.stringify(
    {
      type: rangeType.value,
      ...(isNumericType.value ? { value: value.value } : {}),
      ...(showFrom.value ? { dateFrom: dateFrom.value } : {}),
      ...(showTo.value ? { dateTo: dateTo.value } : {}),
    },
    null,
    2,
  )
})

// debug — do usunięcia przed produkcją
watchEffect(() => {
  if (rangeType.value) {
    console.log('[DEBUG] current output:', output.value)
  }
})
</script>
