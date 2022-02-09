The `Create Index` commands can be found in the command palette as `Breadcrumbs: Copy a local index to the clipboard `and `Breadcrumbs: Copy a global index to the clipboard`

Running these will copy an auto-generated index/table-of-contents to your clipboard.

## Local Index

The local index is a nested markdown list of all the notes going down the `children` tree, starting from the **current note** (local index). It will show the current note's children, all those notes' children, all _those_ notes' children, and so on, until there are no more children.

For example, my university note has my semester module's as immediate children, and each of those modules has assignments: 

```
University
- [[MS Mini-Dissertation MOC]]
  - [[Thesis.Admin]]
- [[N6 MO]]
  - [[N6P1]]
  - [[N6P2]]
  - [[N6E]]
- [[N5 MO]]
  - [[N5P1.Pos]]
  - [[N5P2.Pos]]
  - [[N5E.Pos]]
  - [[N5P1]]
  - [[N5P2]]
  - [[N5P3]]
  - [[N5A1.Cul]]
  - [[N5E.Cultural]]
- [[N4 MO]]
  - [[N4P1.Essay]]
  - [[N4E.Env]]
  - [[N4P1.Soc]]
  - [[N4P2.Soc]]
  - [[N4P3.Soc]]
  - [[N4E.Soc]]
- [[N2 MO]]
  - [[N2P1]]
  - [[N2P2]]
  - [[N2P3]]
  - [[N2P4]]
  - [[N2E]]
  - [[N2A1]]
  - [[N2A2]]
- [[N1 MO]]
  - [[N1A1]]
  - [[N1A2]]
  - [[N1E]]
  - [[N1A2.SPSS]]
  - [[N1E.SPSS]]
```

## Global Index

The global index does the same thing as the local index, expect it does it for every [[sink|Terminology#Sink]] in the parent tree (ie. all those notes that don't have parents; at the "top" of the parent tree).

## Customisation

The [[settings|Settings#create-index]] for this functionality can change how it generates the index.