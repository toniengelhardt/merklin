declare type DatetimeString = string
declare type DateString = string
declare type TimeString = string

declare type Color = typeof string

// Copied from UnoCSS, not sure how to do it otherwise.
declare interface Colors {
  [key: string]: Colors | string;
}
