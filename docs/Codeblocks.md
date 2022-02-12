Breadcrumbs has its own codeblocks, too.

Add them to a note using the following syntax:

````
```breadcrumbs
```
````

Without anything else inside, this will cause an error to render with some information on how to fix it:

![](https://imgur.com/bCUIrHo.png)

Basically, we need to tell the codeblock what to show, and what options to use.

## Fields

### `type`

There are two visualization types. The first is `tree`. This shows the same information as [Create Local Index](/docs/Commands/Create%20Index.md) or the [Down View](/docs/Getting%20Started/Views), but in the current note.

![](https://imgur.com/9NLedZ1.png)

The second visualization type is `juggl`, which will use the [Juggl plugin](https://github.com/HEmile/juggl) to visualize the Breadcrumbs graph. You can use the same options here, in addition to Juggl-specific options listed [here](https://juggl.io/Features/Breadcrumbs+code+blocks).

![](https://i.imgur.com/YwlXp4n.png)

### `dir`

Use `dir: <direction>` to specify which of the 5 directions the tree should show.

- `up`: Shows the parent of the current note.
- `down`: Shows the children of the current note.
- `same`: Shows the siblings of the current note.
- `next`: Shows the next of the current note.
- `prev`: Shows the prev of the current note.

### `title`

Use `title: false` to not show the title.

![](https://imgur.com/6597yiR.png)

### `fields`

Use `fields: parent, upper` to limit which fields get shown in the tree.

**This feature has not been implemented yet, but this is the intended syntax**.

### `depth`

Use `depth: <number>-<number>` to limit the depth of the tree.

Leave this line out to show the max depth.

![](https://imgur.com/gZgATS2.png)

Use `depth: 2` or `depth: 2-` to show all notes with _atleast_ a depth of `2` (minimum is `1`).

Use `depth: -2` to show all notes with a depth of _at most_ `2`.

Use `depth: 2-4` to show all notes with a depth between `2` and `4` (inclusive).

### `flat`

Use `flat: true` to flatten the results:

![](https://imgur.com/wFJ67VX.png)

### `from`

Use any of the following [Dataview Source fields](https://blacksmithgu.github.io/obsidian-dataview/query/sources/) to narrow down the results.

Each note in the Breadcrumbs results will be checked to see it meets the criteria of the `from` query, and will be excluded, if not.

### `content`

`content: open` or `content: closed` will load all the content from each note in the results. `open` will open the dropdowns, and `closed` will not.

![](https://imgur.com/TttTpXl.png)
