/**
 * Helper function to init an interval and call the function right away.
 * Arguments are the same as useItervalFn.
 */
export const useEagerIntervalFn = (fn: () => void, interval: number, options?: Object) => {
  fn()
  useIntervalFn(fn, interval, options)
}
