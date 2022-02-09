A Hierarchy Note is a separate note with an outline. This serves as a way to create a Breadcrumbs structure without having to add metadata to every note.
Simply create a table-of-contents-like outline, and Breadcrumbs will treat it as a parent-child structure.

To use this new feature, go to the "Hierarchy Notes" settings tab to tell Breadcrumbs:

1. Which notes to look at, and
2. Which type of ↑ relation to treat the items as.

## Example

This example will add the listed items to the Breadcrumbs hierarchy.

`1` is the parent of `1.1` and `1.2`.

`1.1` has no children.

`1.2` is the parent of `1.2.1`, `1.2.2`, and `1.2.3`.

and so on...

```md
- [[1]]
  - [[1.1]]
  - [[1.2]]
    - [[1.2.1]]
    - [[1.2.2]]
      - [[1.2.2.1]]
    - [[1.2.3]]
  - [[1.3]]
- [[2]]
  - [[2.1]]
    - [[2.1.1]]
      - [[2.1.1.1]]
```

## Other content in the hierarchy note

Breadcrumbs only considers list items, so you can have any other content in the note, as long as Obsidian can tell what the parent of each item is.

So this is allowed:

```md
---
parent: [[A]]
---

- [[1]]

  - [[1.1]]

  - [[1.2]]

    - [[1.2.1]]

  - [[1.3]]
```

## Specifying Different Up Fields

You can tell Breadcrumbs to override the default up field name, by putting the field name you want before the note:

```md
- [[1]]
  - parent [[1.1]]
  - up [[1.2]]
  - top [[1.3]]
```

Will mean:

- `1.1 -parent-> 1`
- `1.2 -up-> 1`
- `1.3 -top-> 1`
