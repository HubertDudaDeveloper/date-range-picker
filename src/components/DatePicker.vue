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
      v-model.number="numericValue"
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
    <pre data-testid="json-output"><code>{{ output }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { IDatePickerProps, ENumericDateTypes } from '@/types/DatePicker.ts'

const props = defineProps<IDatePickerProps>()

const rangeType = ref('')
const numericValue = ref(1)
const dateFrom = ref('')
const dateTo = ref('')

const isNumericType = computed(() =>
  Object.values(ENumericDateTypes).includes(rangeType.value),
)

const showFrom = computed(() => ['date from-to', 'date-from'].includes(rangeType.value))

const showTo = computed(() => ['date from-to', 'date-to'].includes(rangeType.value))

const output = computed(() => {
  return JSON.stringify(
    {
      type: rangeType.value,
      ...(isNumericType.value ? { value: numericValue.value } : {}),
      ...(showFrom.value ? { dateFrom: dateFrom.value } : {}),
      ...(showTo.value ? { dateTo: dateTo.value } : {}),
    },
    null,
    2,
  )
})

// Prevent wrong values for numeric input
watch(numericValue, (newValue, oldValue) => {
  if (newValue < props.min || newValue > props.max) {
    numericValue.value = oldValue;
  }
})

watch(dateFrom, (newValue, oldValue) => {
  const newValueDate = new Date(newValue);
  const minDateValue = new Date(props.minDate);
  const maxDateValue = new Date(props.maxDate);

  if (isNaN(newValueDate.getTime()) || newValueDate < minDateValue || newValueDate > maxDateValue) {
    numericValue.value = oldValue;
  }
})
</script>

<style lang="scss" scoped>
 .date-range-picker {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border: 1px solid black;
    border-radius: 8px;
    min-width: 320px;
    background-color: white;
 }
</style>
