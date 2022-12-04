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

/**
 * Normalizes time of date to 12pm (noon).
 * Note that the original date is modified
 * This way there is (hopefully) no conflict with timezones.
 * @param date - Date object to normalize.
 * @returns Normalized date.
 */
export function normalizeDate(date: Date): Date {
  date.setHours(12, 0, 0, 0)
  return date
}
