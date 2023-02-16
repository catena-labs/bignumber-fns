import { BigNumber } from "bignumber.js"

/**
 * Determines if a parameter is a BigNumber type, while also indicating to the
 * Typescript parser to treat the value as a BigNumber going forward
 *
 * @param value the value to check
 * @returns true if the item is a BigNumber, false otherwise
 */
export function isBigNumber(value?: unknown): value is BigNumber {
  return BigNumber.isBigNumber(value)
}
