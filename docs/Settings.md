Breadcrumbs comes with many settings to let you customise your experience with it.
These are broken down into:

- Hierarchies
- Hierarchy Notes
- General Settings
- Matrix/List View
- Trail/Grid View
- Write Breadcrumbs to File
- Visualisation Modal
- Create Index
- Debugging

## Hierarchies

Here is where you set the names you will use to create the various [relationships](Getting%20Started/Relationships.md) in your vault.

Read more about [hierarchies](/docs/Getting%20Started/Hierarchies.md)

## Hierarchy Notes

### Hierarchy Note Names

A comma-separated list of markdown note names where you keep your hierarchy notes.

### Hierarchy Note Up Field Name

The default field name to use for the `up` [direction](/docs/Getting%20Started/Relationships#directions).

You can also manually specify a different up field name to use by putting that field name before the link:

```md
- [[Parent]]
  - up [[Note]]
```

## General Settings

### CSV Breadcrumb Paths

The file path of a csv files with breadcrumbs information.

Read more about this feature [here](/docs/Alternative%20Hierarchies/Alternative%20Hierarchies.md#CSV-Breadcrumbs)

### Refresh Index on Note Change

Refresh the Breadcrumbs index data everytime you change notes. This is how Breadcrumbs used to work, making it responsive to changes immediately after changing notes. However, this can be very slow on large vaults, so it is off by default.

### Fields used for Alternative note names (Aliases)

A comma-separated list of fields you use to specify note name aliases. These fields will be checked, in order, and be used to display an alternate note title in both the list/matrix view, and trail/grid view. This field will probably be `alias` or `aliases`, but it can be anything, like `title`, for example.

### Use yaml or inline fields for hierarchy data

If enabled, Breadcrumbs will make it's hierarchy using yaml fields, and inline fields (if you have Dataview enabled). If this is disabled, it will only use Juggl links for it's metadata (See below).

### Use Juggl link syntax without having Juggl installed.

Should Breadcrumbs look for [Juggl links](https://juggl.io/Link+Types) even if you don't have Juggl installed? If you do have Juggl installed, it will always look for Juggl links.

### Dataview Wait Time

Enter an integer number of seconds to wait for the Dataview Index to load. The larger your vault, the longer it will take. If you see an error in the console saying "Cannot destructure currGraphs of undefined", try making this time longer. If you don\'t get that error, you can make this time shorter to make the Breadcrumbs load faster. The default is 5 seconds.

## Matrix/List View

These settings apply to the [matrix/list view](Getting%20Started/Views.md)

### Show Matrix or List view by default

When Obsidian first loads, which view should it show? On = Matrix, Off = List

### Open View in Right or Left side

When loading the matrix view, should it open on the left or right side leaf? On = Right, Off = Left.

### Show all field names or just relation types

This changes the headers in matrix/list view. You can have the headers be the list of metadata fields for each relation type (e.g. `parent, broader, upper`). Or you can have them just be the name of the relation type, i.e. 'Parent', 'Sibling', 'Child'. On = show the full list of names.

### Show Relationship Type

Show whether a link is real or implied. A real link is one you explicitly put in a note. E.g. parent:: [[Note]]. An implied link is the reverse of a real link. For example, if A is the real parent of B, then B must be the implied child of A.

### Sorting

Different options to sort the results of the L/M view.

Manual ordering takes precidence over alphabetical (automatic) ordering.

#### Sort Alphabetically Ascending/Descending

Sort square items alphabetically in Ascending (on) or Descending (off) order.

#### Sorting Field Name

The metadata field name used to indicate the order in which items should be sorted in the L/M view.

If you choose `order` as the field to use, then you can start adding orders to your notes as follows:

```md
# Note A

order:: 5
```

```md
# Note B

order:: 1
```

So even if `A` usually appears before `B` in the matrix view, it will now appear _after_ `B`, because `B` has an order of 1 (manual order is sorted ascendingly).

### Filter Implied Siblings

Implied siblings are: 1) notes with the same parent, or 2) notes that are real siblings. This setting only applies to type 1 implied siblings. If enabled, Breadcrumbs will filter type 1 implied siblings so that they not only share the same parent, but the parent relation has the exact same type. For example, the two real relations B --parent-> A, and A --parent-> A create an implied sibling between B and C (they have the same parent, A). The two real relations B --parent-> A, and A --up-> A create an implied sibling between B and C (they also have the same parent, A). But if this setting is turned on, the second implied sibling would not show, because the parent types are differnet (parent versus up).

## Trail/Grid View

These settings apply to the [Trail/Grid View](Getting%20Started/Views.md)

### Show Breadcrumbs

Show a trail of notes leading from your index note down to the current note you are in (if a path exists)

### Trail or Table or Both

Wether to show the regular breadcrumb trails, the table view, neither, or both. 1 = Only Trail, 2 = Only Grid, 3 = Both

### Limit Trail to only show certain parents

From a list of your different `up` fields, choose which should be shown in the trail view. All are shown by default.

### Field name to hide trail

A note-specific toggle to hide the Trail View. By default, it is `hide-trail`. So, to hide the trail on a specific note, add the field to that note's yaml, like so: `hide-trail: {{anything}}`.

### Views to show

Choose which of the views to show at the top of the note.

Trail, Grid, and/or the Next-Previous view.

### Index/Home Note(s)

The note that all of your other notes lead back to. The parent of all your parent notes. Just enter the name. So if your index note is `000 Home.md`, enter `000 Home`. You can also have multiple index notes (comma-separated list). The breadcrumb trail will show the shortest path back to any one of the index notes listed.

You can now leave this field empty, meaning the trail will show a path going as far up the parent-tree as possible.

### All or Shortest

If multiple paths are found going up the parent tree, should all of them be shown by default, or only the shortest? On = all, off = shortest

### Breadcrumb trail separator

The character to show between crumbs in the breadcrumb trail. The default is '→'

### No path found message

The text to display when no path to the index note was found, or when the current note has no parent (this happens if you haven't chosen an index note)

### Respect Readable Line Length

Should the breadcrumbs trail adjust its width to the readable line length, or use as much space as possible? On = use readable line length.

## Write Breadcrumbs to File

Read about this feature [here](/docs/Write Breadcrumbs to File)

### Only write certain fields to the file

If you don't want to write all types of implied links to the file, choose which ones you want by checking the apprpriate boxes.

### Write BCs to file Inline

When writing BCs to file, should they be written inline (using Dataview syntax), or into the YAML of the note?

### Show the `Write Breadcrumbs to ALL Files` command

This command attempts to update ALL files with implied breadcrumbs pointing to them. So, it is not shown by default (even though it has 3 confirmation boxes to ensure you want to run it

## Visualisation Modal

Options for the [Visualisation View](/docs/Getting Started/Views). The available settings can also be found there.

## Create Index

Settings for the [create index](Commands/Create%20Index.md) functionality

### Wikilink Brackets

Whether or not to add wikilink brackets around the items of the generated index

### Show alias of notes in index

If the note has an alias, show it next to the result.

## Debugging

Enabling these settings will help in debugging any issues you may be having. If everything is working as expected, you can leave these off.

### Debug Mode

Toggling this on will enable a few console logs to appear when use the matrix/list view, or the trail.

### Super Debug Mode

Toggling this on will enable ALOT of console logs
