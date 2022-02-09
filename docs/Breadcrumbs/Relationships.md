Breadcrumbs works by reading the manually created relationships in your vault.
I'm going to use the terms `parents`, `siblings` and `children` to refer to these relations, but you can call them whatever you want in your vault.

## Usage

If you want note `A` to be the parent of note `B`, then you can put the following into the frontmatter of note `B`: `parent: [[A]]`.
Now Breadcrumbs will see this relation:

![](https://i.imgur.com/2SxovA0.png)

You can also use [Dataview](https://github.com/blacksmithgu/obsidian-dataview) inline fields to add the same relations to your notes. If you have the Dataview plugin enabled, you can add the same relation in the **content** of the note: `parent:: [[A]]` (note the double colon for inline fields `::`)

![](https://i.imgur.com/uk85TsZ.png)

## Directions

No matter what you call the relationships, they all indicate some direction in a hierarchy.

The directions used in Breadcrumbs are `up ↑`, `same ↔`, `down ↓`, `next →`, and `previous ←`.

We can say `A` is above `B` (↑).

`C` is on the same level as `D` (→).

`E` is below `F` (↓).

`G` is the next note from `H` (→)

Or, `I` is the previous of `J` (←)

## Implied Relationships

So, we can manually create hierarchies in the vault using the 5 relationship types. These are called _real_ relationships, those that you explicitly type out in a note.

But there is a second kind of relationship, _implied_ relationships.
An implied relation is just the reverse of a real relation.

For example, if `A` is the parent of `B`, then it is _implied_ that `B` is the **child** of `A`.
Every real relation implies the opposite relation.

Here is an image showing all possible relations, and their implied inverses:

![](https://imgur.com/RJOUQQV.jpg)

All real relations are in black, and the implied relations are starred `*` and in colour
