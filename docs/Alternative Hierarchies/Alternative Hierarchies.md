# Alternative Hierarchy Building

Breadcrumbs gives you a few ways to build your hierarchy without having to manually specify each individual link in your notes.

## Folder Notes

This feature lets you add to your hierarchy using your existing folder structure.

Go to a note you want to act as the index, and add `BC-folder-note: fieldName` to it's metadata. This will add an edge from the folder-note to all other notes in that folder, using the `fieldName` specified.

![](https://imgur.com/DvcBoRy.gif)

## Tag Notes

Similarly to [Folder Notes](Alternative%20Hierarchies.md#folder-notes), you can use your existing _tag_ structure to set up hierarchies.

Choose the note you'd like to act as the index, and add `BC-tag-note: #Tag` to the note's metadata. This will take all _other_ notes with that tag, and have them point upwards to that tag note.

By default, it will use the first field name it can find. But you can also specify which field name to use by adding `BC-tag-note-field: fieldName` to the folder note's metadata.

![](https://imgur.com/eONpeWH.gif)

## Link Notes

A link-note is declared using `BC-link-note: fieldName`.

A link-note takes all the links leaving it, and adds them to the hierarchy using the `fieldName` specified

![](https://imgur.com/Z4yAKbh.gif)

## Traverse Note

A traverse-note is declared using `BC-traverse-note: fieldName`.

A traverse-note does the same thing as a [Link Note](Alternative%20Hierarchies.md#link-notes), but it keeps going.
It adds the links of the current note to the graph using `fieldName`, but it also adds the links leaving those notes, and the links leaving _those_ notes, until the notes have no links leaving them.

![](https://imgur.com/dBy92HF.gif)

## Regex Notes

A regex note is declared using `BC-regex-note: /regex/flags`.

Any note name in your entire vault that matches the regex will be added to the Breadcrumbs graph using the field provided in `BC-regex-note-field: field`, or the default field under `Settings > Alternative Hierarchies > Regex Notes > Default Field`, or the first field in your hierarchies as a last resort.

![](https://imgur.com/qaqFUU8.png)

## Dataview Notes

A _Dataview Note_ allows you to run any valid [Dataview `from` query](https://blacksmithgu.github.io/obsidian-dataview/query/sources/), and add Breadcrumbs to all notes that match the query.

The query must be wrapped in quotes, and folder names must be wrapped in **double** quotes.
Therefore, to avoid confusing Yaml, you need to wrap the entire query in single quotes, so that folders can be wrapped in double quotes.

The query is passed directly into the Dataview API, so you can troubleshoot it by running `app.plugins.plugins.dataview.api.pages(query: string)` in the Obsidian console

![](https://cdn.discordapp.com/attachments/929513881041248266/936973322980302848/unknown.png)

## Date Notes

Enable _Date Notes_ under `Settings > Alternative Hierarchies > Date Notes`. You also need to provide the format of your daily note names in **Luxon** format (which is different to Moment's syntax). Be sure to checkout [the docs](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) to find the right syntax.

Once enabled, Breadcrumbs will try to link all your daily notes together using the field provided (`next`, by default).

This means you don't have to manually add any Breadcrumbs to your daily notes for them to be linked together.

**Limitations**: Currently, _any_ note with a date in the name will be considered a daily note. I'll try find a way around this.

![](https://cdn.discordapp.com/attachments/929513881041248266/936995669619654676/unknown.png)

## Hierarchy Notes

A Hierarchy Note is a separate note with an outline. This serves as a way to create a Breadcrumbs structure without having to add metadata to every note.
Simply create a table-of-contents-like outline, and Breadcrumbs will treat it as a parent-child structure.

To use this new feature, go to the "Hierarchy Notes" settings tab to tell Breadcrumbs:

1. Which notes to look at, and
2. Which type of ↑ relation to treat the items as.

### Example

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

### Other content in the hierarchy note

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

### Specifying Different Up Fields

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

### Hierarchy Note Adjustor

Run the command `Adjust Hierarchy Notes` to open this feature.

If you have more than one HN, you will first need to choose which one to adjust

![](https://i.imgur.com/gdNmvoy.png)

After choosing one, you will see a new modal showing each line of the chosen HN

![](https://i.imgur.com/gl0rDqY.png)

There are a few different functions you can use here:

1. `Enter` to jump to that line in the chosen HN.
2. `Delete` to delete that line in the chosen HN.
3. `Shift + ↑/→/↓` to open the HN Adjuster

If you ran any of the commands in `3`, you'll see a new modal where you can add a parent/sibling/child to the chosen line in the chosen HN

![](https://i.imgur.com/AznqViP.png)

Even if you chose `↑` at first, you can still change it to `↓` or `→`.
Press `Submit` to add the new item to the chosen HN.

## CSV Breadcrumbs

This feature allows you to set up hierarchies in your vault using a CSV file located in your vault.

This pairs well with [MetadataFrame](https://github.com/SkepticMystic/metadataframe).

### How to Use

- You give it the path to a CSV file in your vault (See the [settings tab options](docs/Settings#CSV-Breadcrumb-Paths)).

![](https://i.imgur.com/qbTs5Ph.png)

- You have to have a column called `file` with the note name in it (not the path, and don't add .md)
- Then each other column must be a field name from your hierarchies.
- Make sure to `Refresh Index` for the changes to take effect

This is a working example, assuming all files exist in your vault, and you have a field name called `parent`

```csv
file, up
test, testP
1, 2
another, parent
```
