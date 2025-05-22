import { render, screen, fireEvent } from '@testing-library/vue'
import DatePicker from '../DatePicker.vue'
import { describe, it, expect } from 'vitest'

const props = {
  allowedTypes: ['year', 'month', 'date from-to', 'date-from', 'date-to'],
  disabledTypes: ['month'],
  min: 1,
  max: 99,
  minDate: '2023-01-01',
  maxDate: '2025-12-31',
}

describe('DatePicker.vue', () => {
  it('renders select with allowed and disabled types', () => {
    render(DatePicker, { props })

    const select = screen.getByTestId('range-type')
    expect(select).toBeInTheDocument()

    const monthOption = screen.getByRole('option', { name: 'month' })
    expect(monthOption).toBeDisabled()
  })

  it('shows input only for numeric types', async () => {
    render(DatePicker, { props })

    await fireEvent.update(screen.getByTestId('range-type'), 'year')

    const input = screen.getByTestId('number-value')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'number')
  })

  it('shows correct date pickers based on rangeType', async () => {
    render(DatePicker, { props })

    await fireEvent.update(screen.getByTestId('range-type'), 'date from-to')

    const fromDate = screen.getByTestId('from-date')
    const toDate = screen.getByTestId('to-date')

    expect(fromDate).toBeInTheDocument()
    expect(toDate).toBeInTheDocument()
  })

  it('outputs correct JSON for numeric values', async () => {
    render(DatePicker, { props })

    await fireEvent.update(screen.getByTestId('range-type'), 'year')
    await fireEvent.update(screen.getByTestId('number-value'), '12')

    const pre = screen.getByTestId('json-output')
    expect(pre.textContent).toContain('"type": "year"')
    expect(pre.textContent).toContain('"value": 12')
  })

  it('outputs correct JSON for date range', async () => {
    render(DatePicker, { props })

    await fireEvent.update(screen.getByTestId('range-type'), 'date from-to')
    await fireEvent.update(screen.getByTestId('from-date'), '2024-06-01')
    await fireEvent.update(screen.getByTestId('to-date'), '2024-06-30')

    const output = screen.getByTestId('json-output')
    expect(output.textContent).toContain('"dateFrom": "2024-06-01"')
    expect(output.textContent).toContain('"dateTo": "2024-06-30"')
  })
})
