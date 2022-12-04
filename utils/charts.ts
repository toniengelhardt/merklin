/**
 * Used as callback for chart.js ticks.
 * Output format is days with the month as secondary label on the first of the month.
 * @param value: timestamp.
 * @param idx: index of the tick.
 */
export function formatTicksDaily(value: number): string | string[] {
  const date = new Date(value)
  const day = date.getDate()
  return day === 1
    ? [day.toString(), new Intl.DateTimeFormat('en', { month: 'short' }).format(date)]
    : day.toString()
}

/**
 * Used as callback for chart.js ticks.
 * Output format is months with the year as secondary label on the first month of the year.
 * @param value: timestamp.
 * @param idx: index of the tick.
 */
export function formatTicksMonthly(value: number): string | string[] {
  const date = new Date(value)
  const month = date.getMonth()
  const monthStr = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
  return month === 1
    ? [monthStr, new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)]
    : monthStr
}
