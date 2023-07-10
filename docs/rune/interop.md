# Interop With Other Libraries

## React/Preact

Soon, we will write a `useRune` hook that allows easy consumption of runes from
React/Preact, with full subscription capability. See
[#1152](https://github.com/paritytech/capi/issues/1152).

For now, we recommend you use `.run()` on the rune, and treat it like any other
asynchronous method call.

## Observable Libraries

A simple RxJS-observable-to-rune could look like:

```ts
import { is, Runner, RunStream, ValueRune } from "capi"
import { Observable } from "rxjs"

const observableToRune = <T>(
  observable: Observable<T>,
): ValueRune<T, ObservableError> =>
  ValueRune.new(RunObservable, observable).unhandle(is(ObservableError))

class RunObservable<T> extends RunStream<T | ObservableError> {
  subscription
  constructor(runner: Runner, observable: Observable<T>) {
    super(runner)
    this.subscription = observable.subscribe({
      next: (value) => {
        this.push(value)
      },
      error: (e) => {
        this.push(new ObservableError(e))
        this.finish()
      },
      complete: () => {
        this.finish()
      },
    })
  }

  override cleanup(): void {
    this.subscription.unsubscribe()
  }
}

class ObservableError extends Error {
  override readonly name = "ObservableError"
  constructor(public value: unknown) {
    super()
  }
}
```

A rune-to-observable is inherently lossy, as runes carry more information than
observables. However, a simple rune-to-RxJS-observable could be implemented as
follows:

```ts
import { Rune } from "capi"
import { Observable } from "rxjs"

const runeToObservable = <T>(
  rune: Rune<T, unknown>,
): Observable<T> =>
  new Observable((subscriber) => {
    let stop = false
    ;(async () => {
      try {
        for await (const value of rune.iter()) {
          if (stop) break
          subscriber.next(value)
        }
        subscriber.complete()
      } catch (e) {
        subscriber.error(e)
      }
    })()
    return () => {
      stop = true
    }
  })
```

See also [Runes vs Observables](/rune/advanced/runes-vs-observables).
