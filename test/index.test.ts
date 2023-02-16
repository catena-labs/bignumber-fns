import { hello } from "../lib/index"

test("returns a string", () => {
  expect(hello()).toBe("bignumber-fns")
})
