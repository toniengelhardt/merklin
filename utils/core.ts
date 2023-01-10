/**
 * Utility to create dicts of counts per key.
 * @param dict: object.
 * @param key: key to increment.
 * @param incrementor: value by which the entry should be incremented (can be negative to decrement).
 */
export function dictIncrement(dict: { [key: string | number]: any }, key: number | string, incrementor = 1) {
  if (dict[key]) {
    dict[key] = dict[key] + incrementor
  }
  else {
    dict[key] = 1
  }
}

/**
 * Formats a number to percent.
 * @param value: number to format.
 */
export function formatPercent(value: number) {
  const fvalue = value * 100
  return `${fvalue < 1 ? fvalue.toPrecision(1) : fvalue.toFixed(0)}%`
}
