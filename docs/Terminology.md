A collection of terms used in Breadcrumbs.

Some of these are specific to Breadcrumbs, and some are more widely used in graph analysis and other areas.

## Terms

### Direction

Breadcrumbs uses 5 different directions to create structure in your vault. These 5 are:

- up ↑
- same ↔
- down ↓
- next →
- previous ←

### Fields

A field is a metadata field you use to indicate a Breadcrumbs relationship. Every field must be associated with one (and only one) [direction](https://github.com/SkepticMystic/breadcrumbs/wiki/Terminology#direction).

For example, `parent` is a field in the `up` direction. `Sibling` is a field in the `same` direction.

Every direction can have multiple fields in it. `parent` and `upper`, for example.

### Sink

A sink is a node in the graph with no outgoing edges.

For example, the `Linux Users` node is a sink, because it only has links coming _in_, none going outward.

![](https://i.imgur.com/cOYXrOh.png)