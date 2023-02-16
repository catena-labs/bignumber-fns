import { BigNumber } from "bignumber.js"

import { asBigNumber } from "../lib/as-big-number"

test("returns a BigNumber from a BigNumber", () => {
  expect(asBigNumber(new BigNumber(1.0)).eq(new BigNumber(1.0))).toBe(true)
})

test("returns a BigNumber from a string", () => {
  expect(asBigNumber("7").eq(new BigNumber(7.0))).toBe(true)
})

test("returns a BigNumber from a number", () => {
  expect(asBigNumber(420).eq(new BigNumber(420))).toBe(true)
})

test("handles base 16", () => {
  expect(asBigNumber("AB", { base: 16 })).toEqual(new BigNumber(171))
})

test("handles a fallback of base 16", () => {
  expect(asBigNumber(undefined, { fallback: "A", base: 16 })).toEqual(
    new BigNumber(10)
  )
})

test("returns the fallback on error", () => {
  expect(
    asBigNumber("not a number", { fallback: 100 }).eq(new BigNumber(100))
  ).toBe(true)
})

test("returns the fallback if given no primary value", () => {
  expect(asBigNumber(undefined, { fallback: 100 }).eq(new BigNumber(100))).toBe(
    true
  )
})

test("throws on error if the fallback is invalid", () => {
  expect(() => {
    asBigNumber("not a number", { fallback: "also not a number" })
  }).toThrow("[BigNumberError] Invalid argument: also not a number")
})

test("throws on error if an invalid number and no fallback is given", () => {
  expect(() => {
    asBigNumber("not a number")
  }).toThrow("[BigNumberError] Invalid argument: not a number")
})

test("throws if given no arguments", () => {
  expect(() => {
    asBigNumber()
  }).toThrow("[BigNumberError] Invalid argument: undefined")
})
