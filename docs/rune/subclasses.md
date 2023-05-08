# Rune Subclasses

Rune enables fluent APIs by facilitating the use of Rune subclasses. Throughout
the introduction, we made use of a number of Rune subclasses, including ones
built-in to Rune (such as `ValueRune` and `FnRune`) and some defined by Capi
(such as `ChainRune` and `PalletRune`).

The base `Rune` class has only a few, core methods like `.run()` and `.iter()`,
so as to not clutter up the methods of subclasses. Most convenience methods for
manipulating runes are placed on subclasses like `ValueRune`. For this reason,
many Rune APIs will default to making `ValueRune`s (such as `Rune.constant`).

## Converting Between Rune Subclasses

All runes have an `.into()` method that can be used to convert them to another
compatible Rune subclass. For example, a `ValueRune` of a function can be
converted into an `FnRune`:

```ts
import { Rune } from "capi"

const add = Rune.constant((a: number, b: number) => a + b)
// add: ValueRune<(a: number, b: number) => void>

add.call(1, 2) // error, `.call()` isn't defined on `ValueRune`

const addFn = add.into(FnRune)
// addFn: FnRune<(a: number, b: number) => void>

const three = addFn.call(1, 2) // this works
/// three: ValueRune<number>
```

However, if you try to convert a `ValueRune` of something other than a function
into an `FnRune`, you will get a type error (as expected).

```ts
three.into(FnRune) // error, `number` is not a function
```
