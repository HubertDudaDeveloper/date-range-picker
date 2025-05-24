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
}

export enum ENumericDateTypes {
  YEAR = 'year',
  QUARTER = 'quarter',
  MONTH = 'month',
  WEEK = 'week',
  DAY = 'day',
  HOUR = 'hour',
  MINUTE = 'minute',
}
