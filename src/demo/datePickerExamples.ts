import { EDatePickerTypes, ENumericDateTypes } from '@/types/DatePicker';

export const firstExample = {
  id: 0,
  title: 'First example',
  datePicker: {
    allowedTypes: Object.values(EDatePickerTypes),
    disabledTypes: [EDatePickerTypes.QUARTER],
    min: '1',
    max: '60',
    minDate: '2022-01-01',
    maxDate: '2025-12-31',
  }
}

export const secondExample = {
  id: 1,
  title: 'Second example',
  datePicker: {
    allowedTypes: Object.values(EDatePickerTypes),
    disabledTypes: [EDatePickerTypes.MINUTE],
    min: '60',
    max: '1200',
    minDate: '1991-01-01',
    maxDate: '2001-12-31',
  }
}
export const thirdExample = {
  id: 2,
  title: 'Third example',
  datePicker: {
    allowedTypes: Object.values(ENumericDateTypes) as unknown as EDatePickerTypes[],
    disabledTypes: [EDatePickerTypes.MINUTE],
    min: '30',
    max: '120',
    minDate: '2100-01-01',
    maxDate: '2900-12-31',
  }
}
export const forthExample = {
  id: 1,
  title: 'Forth example',
  datePicker: {
    allowedTypes: [EDatePickerTypes.DATE_FROM_TO, EDatePickerTypes.DATE_TO, EDatePickerTypes.DATE_FROM],
    disabledTypes: [EDatePickerTypes.DATE_TO],
    min: '0',
    max: '9999999999999',
    minDate: '0001-01-01',
    maxDate: '1410-07-15',
  }
}

export default [firstExample, secondExample, thirdExample, forthExample]
