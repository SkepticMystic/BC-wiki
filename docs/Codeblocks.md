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

For now, the only type to use is a `tree`. This shows the same information as [Create Local Index](https://github.com/SkepticMystic/breadcrumbs/wiki/Create-Index#local-index) or the [Down View](https://github.com/SkepticMystic/breadcrumbs/wiki/Views#down-view), but in the current note.

![](https://imgur.com/9NLedZ1.png)

### `dir`

Use `dir: <direction>` to specify the direction of the tree.

- `up`: Shows the parent of the current note.
- `down`: Shows the children of the current note.
- `same`: Shows the siblings of the current note.
- `next`: Shows the next of the current note.
- `prev`: Shows the prev of the current note.

### `title`

Use `title: false` to not show the title.

![](https://imgur.com/6597yiR.png)

### `depth`

Use `depth: <number>` to limit the depth of the tree.

Leave this line out to show the max depth.

![](https://imgur.com/gZgATS2.png)

### `flat`

Use `flat: true` to flatten the results:

![](https://imgur.com/wFJ67VX.png)

### `content`

`content: open` or `content: closed` will load all the content from each note in the results. `open` will open the dropdowns, and `closed` will not.

![](https://imgur.com/TttTpXl.png)
