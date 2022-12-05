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
