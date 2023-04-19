export function useCapitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
