import { format } from 'date-fns'

export const FORMAT_DATE = 'yyyy-MM-dd'
export const FORMAT_TIME = 'H:mm'

export function formatDate(datetime: Date): DateString {
  return format(datetime, FORMAT_DATE)
}

export function formatTime(datetime: Date): TimeString {
  return format(datetime, FORMAT_TIME)
}

export function displayDate(datetime: Date | undefined): string | undefined {
  return datetime ? format(datetime, 'MMM d, yyyy') : undefined
}
