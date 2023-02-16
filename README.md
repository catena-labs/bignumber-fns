# bignumber-fns

Useful functions to make working with [bignumber.js](https://mikemcl.github.io/bignumber.js/) more enjoyable

## Installation

```sh
npm i bignumber-fns bignumber.js
```

## Usage

```ts
import { asBigNumber } from "bignumber-fns"

isBigNumber(5) // => false

const five = asBigNumber(5)
isBigNumber(five) // => true

const six = asBigNumber("6")
isBigNumber(six) // => true

const seven = asBigNumber(new BigNumber(7))
isBigNumber(seven) // => true

const eighteen = five.plus(six).plus(seven)
isBigNumber(eighteen) // => true
```

## Exported Methods

### `asBigNumber(value, { fallback?, base? })`

Converts a BigNumber-Like param (string, number, BigNumber) and attempts to convert it to the BigNumber type. If the conversion fails (e.g. NaN is provided), it will attempt to return the fallback parameter as a BigNumber. If no fallback is provided, or if the fallback can not be converted to a BigNumber (e.g. NaN is provided), then the method will throw.

```ts
import { asBigNumber } from "bignumber-fns"

const value = "5"
const bignumber = asBigNumber(value, { fallback: 0 }) // returns a BigNumber of 5
const fallback = asBigNumber(undefined, { fallback: 0 }) // returns a BigNumber of 0
const hex = asBigNumber("AB", { base: 16 }) // returns a BigNumber of 171
const hexFallback = asBigNumber(undefined, { fallback: "A", base: 16 }) // returns a BigNumber of 10
```

### `isBigNumber(value)`

Determines if a parameter is a BigNumber type, while also indicating to the Typescript parser to treat the item as a BigNumber going forward.

```ts
import { isBigNumber } from "bignumber-fns"

isBigNumber(5) // false
isBigNumber(new BigNumber(5)) // true
```

## Brought to you by Catena Labs

This project is maintained and funded by [Catena Labs](https://catena.xyz).
