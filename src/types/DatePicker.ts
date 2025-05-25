export interface IDatePickerProps {
  allowedTypes: EDatePickerTypes[]
  disabledTypes: EDatePickerTypes[]
  min: number | string
  max: number | string
  minDate: string
  maxDate: string
}

export enum EDatePickerTypes {
  YEAR = 'year',
  QUARTER = 'quarter',
  MONTH = 'month',
  WEEK = 'week',
  DAY = 'day',
  HOUR = 'hour',
  MINUTE = 'minute',
  DATE_FROM = 'date-from',
  DATE_TO = 'date-to',
  DATE_FROM_TO = 'date from-to',
  EMPTY = '',
}

export enum ENumericDateTypes {
  YEAR = EDatePickerTypes.YEAR,
  QUARTER = EDatePickerTypes.QUARTER,
  MONTH = EDatePickerTypes.MONTH,
  WEEK = EDatePickerTypes.WEEK,
  DAY = EDatePickerTypes.DAY,
  HOUR = EDatePickerTypes.HOUR,
  MINUTE = EDatePickerTypes.MINUTE,
}
