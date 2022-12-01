import { format } from 'date-fns'

export function formatTimestamp(timestamp: BlockTimestamp) {
  const date = new Date(timestamp * 1000)
  return format(date, 'MMM d, yyyy H:mm')
}
