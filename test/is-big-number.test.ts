import { BigNumber } from "bignumber.js"

import { isBigNumber } from "../lib/is-big-number"

test("returns true if the item is a BigNumber", () => {
  expect(isBigNumber(new BigNumber(1))).toBe(true)
})

test("returns false if the item is not a BigNumber", () => {
  expect(isBigNumber(12)).toBe(false)
})

test("returns false if the item is undefined", () => {
  expect(isBigNumber(undefined)).toBe(false)
})
