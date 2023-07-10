# Custom Rune Logic

None of Rune's built-in operators are privileged; they could all be implemented
as external libraries.

Every `Rune<T, U>` is a small wrapper around a `Run<T, U>`, which holds the
execution logic. By subclassing `Run`, you can customize this logic.

All built-in operators do this. For example, to implement `map`, you can define
the following `Run` subclass:

```ts
class RunMap<T1, U, T2> extends Run<T2, U> {
  source: Run<T1, U>
  fn: (value: T1) => T2

  constructor(
    runner: Runner, // this argument must appear in every Run subclass
    // the rest are specific to `RunMap`:
    source: Rune<T1, U>,
    fn: (value: T1) => T2,
  ) {
    super(runner)
    this.source = this.use(source) // instantiate `source` and register the dependency
    this.fn = fn
  }

  lastValue!: T2
  async _evaluate(time: number, receipt: Receipt) {
    // evaluate the source rune at the given time
    const source = await this.source.evaluate(time, receipt)
    // if the source rune is not ready, or it has not changed...
    if (!receipt.ready || !receipt.novel) {
      // skip calling `this.fn` and return the last value
      return this.lastValue
    }
    // otherwise, call `this.fn` and update `this.lastValue`
    return this.lastValue = this.fn(source)
  }
}
```

Then, in `map`, you construct a rune using this logic using `Rune.new`:

```ts
const map = <T1, U, T2>(source: Rune<T1, U>, fn: (x: T1) => T2): Rune<T2, U> =>
  Rune.new(RunMap, source, fn)
```

Rune also exports a few abstract `Run` subclasses that you can use as a base for
building other `Run` subclasses.

For example, if you have some external event stream that you would like to turn
into a rune, you can use `RunStream`:

```ts
class RunMyThing extends RunStream<MyValue> {
  constructor(runner: Runner, ...) {
    super(runner)
    // initialize as necessary
    // call `this.push(value)` when values are recieved
    // call `this.finish()` when complete
  }

  override cleanup(): void {
    // clean up as necessary
  }
}

const myThing = (...) => Rune.new(RunMyThing, ...)
```

## Implementing `Run._evaluate`

_Note: When subclassing `Run` directly, care must be taken to implement this
method properly, as there are a number of invariants you must comply with._

TODO: document these invariants
([#1149](https://github.com/paritytech/capi/issues/1149))
