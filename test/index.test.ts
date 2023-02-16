import * as bigNumberFns from "../lib"

test("exports the available methods", () => {
  expect(bigNumberFns.asBigNumber).toBeDefined()
  expect(bigNumberFns.isBigNumber).toBeDefined()
})
