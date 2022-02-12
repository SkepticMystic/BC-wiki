## Traverse Note

A traverse-note is declared using `BC-traverse-note: fieldName`.

A traverse-note does the same thing as a [Link Note](Link%20Notes.md), but it keeps going.
It adds the links of the current note to the graph using `fieldName`, but it also adds the links leaving those notes, and the links leaving _those_ notes, until the notes have no links leaving them.

![](https://imgur.com/dBy92HF.gif)
