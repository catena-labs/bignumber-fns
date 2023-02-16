import { BigNumber } from "bignumber.js"

import type { BigNumberLike } from "./types"

type AsBigNumberOptions = {
  /**
   * An optional fallback value to return if the initial param can not be
   * converted to BigNumber.
   */
  fallback?: BigNumberLike
  /**
   * An optional base to use for the conversion. Defaults to 10.
   */
  base?: number
}

/**
 * Converts a BigNumber-Like param (string, number, BigNumber) and attempts to
 * convert it to the BigNumber type. If the conversion fails (e.g. NaN is
 * provided), it will attempt to return the fallback parameter as a BigNumber.
 * If no fallback is provided, or if the fallback can not be converted to a
 * BigNumber (e.g. NaN is provided), then the method will throw.
 *
 * @param value the BigNumber-Like item to convert to a BigNumber
 * @param opts.fallback an optional fallback value to return if the initial param can not be converted to bigNumber
 * @param opts.base an optional base to use (defaults to 10)
 * @throws if neither the value or fallback can be converted to a BigNumber.
 * @returns a BigNumber
 */
export function asBigNumber(
  value?: BigNumberLike | null,
  { fallback, base }: AsBigNumberOptions = {}
): BigNumber {
  const bigNumber = new BigNumber(value?.toString() ?? "NaN", base)

  if (bigNumber.isNaN()) {
    if (fallback === undefined || fallback === null) {
      throw new Error(`[BigNumberError] Invalid argument: ${value}`)
    }

    return asBigNumber(fallback, { base })
  }

  return bigNumber
}
