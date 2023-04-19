import { addDays } from 'date-fns'

export function useTimeframeMin(timeframe: ChartTimeframeOption) {
  const min = ref<Date | undefined>(undefined)
  if (timeframe) {
    let days
    switch (timeframe) {
      case '30d':
        days = 30
        break
      case '3m':
        days = 90
        break
      case '1y':
        days = 365
        break
    }
    if (days) {
      min.value = addDays(new Date(), -days)
    }
  }
  return min
}
