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

/**
 * Used as callback for chart.js ticks.
 * Output format is compact notation for monetary values, e.g. 1.5k, 2.2M, etc.
 * @param value: timestamp.
 * @param idx: index of the tick.
 */
export function formatTicksCurrency(value: number): string | string[] {
  const fvalue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact', compactDisplay: 'long' }).format(value)
  return fvalue.replace('$', '')
}

/**
 * Line chart gradient.
 * Source: https://www.chartjs.org/docs/latest/samples/advanced/linear-gradient.html
 */
export function generateChartGradient(context: any, colors: Color[], direction: 'vertical' | 'horizontal' = 'horizontal') {
  const chart = context.chart
  const { ctx, chartArea } = chart
  if (!chartArea) {
    return null
  }
  const stepSize = 1 / (colors.length - 1)
  const x = direction === 'horizontal'
    ? [chartArea.left, 0, chartArea.right, 0]
    : [0, chartArea.bottom, 0, chartArea.top]
  const gradient = ctx.createLinearGradient(...x)
  colors.forEach((color, idx) => gradient!.addColorStop(idx * stepSize, color))
  return gradient
}
