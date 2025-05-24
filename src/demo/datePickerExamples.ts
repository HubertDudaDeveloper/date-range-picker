import { EDatePickerTypes } from './../types/DatePicker';

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
    min: '30',
    max: '120',
    minDate: '1998-01-01',
    maxDate: '2003-12-31',
  }
}

export default [firstExample, secondExample]
