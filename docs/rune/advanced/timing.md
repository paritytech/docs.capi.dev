# Timing

Rune has a "timing system". (It's important to note that the "time" in this
system does not refer to clock time, but rather a Rune-specific construct of
time that is used to track updates).

Its timing system is designed to ensure consistent results when combining
subscriptions. Here, "consistent results" means that, in any pair of dependent
runes (whether a direct or indirect dependency), the values yielded by the
dependent rune each correspond to exactly one value yielded by the independent
rune (i.e. the dependency).

For example, take the following rune dependency graph:

```
  a
 / \
b   c
 \ /
  d
```

Here, `d` is dependent on both `b` and `c`, each of which are dependent on `a`.
Rune ensures that the values yielded by `d` each correspond to exactly one value
yielded by `a` – meaning, the values of `b` and `c` from which any given value
of `d` derives are themselves both derived from the same value of `a`.

Rune is designed such that this property holds in any Rune dependency graph.

This consistency is important for Capi, as it deals with combining subscriptions
very frequently. For example, the above dependency graph appears in a very basic
usage of Capi, where:

- `a` is a subscription to the most recent block hash
- `b` tracks the block number corresponding to `a`
- `c` reads the `Timestamp.Now` storage value at the block `a`
- `d` combines `b` and `c` to log out block numbers and their corresponding
  timestamps

If Runes did not guarantee consistency, this setup could produce inaccurate
logs, where the block number and timestamps corresponded to two different block
hashes.

The core properties of Rune's timing system can be viewed as follows:

- there is a shared timeline
- the timeline is indexed by times, which are natural numbers
- the timeline can be extended with new times
- times semantically correspond to external events
- runes can update at a specific time
- when a rune updates, its dependencies also update
- runes can be evaluated for a given time
- when a rune is evaluated for a time where it did not update, it keeps its old
  value
- when runes are evaluated for a given time, they evaluate their dependencies
  for that same time

So, in the above `abcd` example, `a` is the only "event source" (formally, the
only rune that is extending the timeline). Whenever an external event comes in
(in the Capi case, whenever there is a new block hash), it extends the timeline
with a new time `t`, and updates at that time `t`. Consequently, `b` and `c`
both update at `t`, which causes `d` to update at `t`. Then, `d` is evaluated
for `t`, which uses the evaluation of `b` and `c` for `t`, which both use the
evaluation of `a` for `t`.

Because evaluation of runes happens corresponding to a specific time,
consistency is ensured – all parts of `d`'s value will correspond to the time
`t`, even if new `a` events occur while `d` is still evaluating for time `t`.
