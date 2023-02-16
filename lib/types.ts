import type { BigNumber } from "bignumber.js"

/**
 * A type representing a number that can be converted to a BigNumber, primarily
 * used with the `asBigNumber` method.
 */
export type BigNumberLike = BigNumber | string | number | { toString(): string }
