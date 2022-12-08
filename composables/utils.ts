export const useCapitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

/**
 * Helper function to init an interval and call the function right away.
 * Arguments are the same as useIntervalFn.
 */
export const useEagerIntervalFn = (fn: () => void, interval: number, options?: Object) => {
  fn()
  useIntervalFn(fn, interval, options)
}
