import { asBigNumber } from "./as-big-number"
import { BigNumberLike } from "./types"

type FormatNumberOptions = {
  numDecimals?: number
  decimalSeparator?: string
  thousandsSeparator?: string
}

/**
 * Format a value with thousands separators and a fixed number of decimal places
 *
 * @param value The value to format
 * @param opts.numDecimals The number of decimals to use when formatting the number.
 * @param opts.decimalSeparator The decimal separator to use. Defaults to `.`.
 * @param opts.thousandsSeparator The thousands separator to use, if any. Defaults to `,`. Providing an empty string will disable the thousands separator.
 * @returns A string representation of the number.
 *
 * TODO:
 *  - Add Min, max decimals
 */
export function formatNumber(
  value?: BigNumberLike | null,
  {
    numDecimals,
    decimalSeparator,
    thousandsSeparator
  }: FormatNumberOptions = {}
): string {
  const bigNumber = asBigNumber(value)

  const str = numDecimals
    ? bigNumber.toFixed(numDecimals)
    : bigNumber.toString()

  const parts = str.split(".")

  parts[0] = parts[0].replace(
    /\B(?=(\d{3})+(?!\d))/g,
    thousandsSeparator ?? ","
  )

  return parts.join(decimalSeparator ?? ".")
}
