<template>
  <div class="date-range-picker">
    <label for="range_select">Pick range:</label>
    <select v-model="rangeType" id="range_select" data-testid="range-type">
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
      :max="dateTo || props.maxDate"
      data-testid="from-date"
    />

    <input
      v-if="showTo"
      type="date"
      v-model="dateTo"
      :min="dateFrom || props.minDate"
      :max="props.maxDate"
      data-testid="to-date"
    />

    <!-- podgląd danych -->
    <pre data-testid="json-output"><code>{{ output }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue'
import { EDatePickerTypes, ENumericDateTypes, type IDatePickerProps } from '@/types/DatePicker.ts'

const props = defineProps<IDatePickerProps>()

const rangeType: Ref<EDatePickerTypes> = ref(EDatePickerTypes.EMPTY)
const numericValue: Ref<number | string> = ref(props.min)
const dateFrom: Ref<string> = ref('')
const dateTo: Ref<string> = ref('')

const isNumericType = computed(() =>
  Object.values(ENumericDateTypes).includes(rangeType.value as unknown as ENumericDateTypes),
)

const showFrom = computed(() =>
  [EDatePickerTypes.DATE_FROM_TO, EDatePickerTypes.DATE_FROM].includes(rangeType.value),
)

const showTo = computed(() =>
  [EDatePickerTypes.DATE_FROM_TO, EDatePickerTypes.DATE_TO].includes(rangeType.value),
)

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

const validateNumeric = (val: number | string, prev: number | string) => {
  if (val && isInvalidNumber(val)) {
    numericValue.value = prev
  }
}

const validateDateFrom = (val: string, prev: string, compareTo: string) => {
  const date = new Date(val)
  const to = new Date(compareTo)

  if (
    isNaN(date.getTime()) ||
    date < new Date(props.minDate) ||
    date > new Date(props.maxDate) ||
    date > to
  ) {
    dateFrom.value = prev
  }
}

const validateDateTo = (val: string, prev: string) => {
  const date = new Date(val)
  if (isNaN(date.getTime()) || date < new Date(props.minDate) || date > new Date(props.maxDate)) {
    dateTo.value = prev
  }
}

const isInvalidNumber = (val: number | string) => {
  return Number(val) < Number(props.min) || Number(val) > Number(props.max)
}

// Prevent wrong values for numeric input and date from to
watch([numericValue, dateFrom, dateTo], ([num, from, to], [prevNum, prevFrom, prevTo]) => {
  validateNumeric(num, prevNum)
  validateDateFrom(from, prevFrom, to)
  validateDateTo(to, prevTo)
})
</script>

<style lang="scss" scoped>
.date-range-picker {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  min-width: 320px;
  animation: 1 0.5s fade-in;
  background-color: $color-section-background;
  filter: $section-shadow;


  select {
    text-transform: capitalize;
    border-radius: 16px;
    padding: 8px;
  }

  option {
    text-transform: capitalize;
  }

  input {
    border-radius: 16px;
    padding: 8px;
  }
}
</style>
