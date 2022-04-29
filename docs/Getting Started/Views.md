The main views you'll use are the Trail view at the top of a note (1 & 2), the Next/Previous View (3), and the Matrix view on the side of a note (4).

![](https://i.imgur.com/CbBBPVk.png)

Each view has alternative visualisations.

## Trail/Grid View

The trail view shows all the paths going up the `parent` tree.  
There are two visualisations of these paths, the Path view (1), and the Grid view (2). Both show the **same** information, just in a different way.

![](https://i.imgur.com/FbMLEys.png)

You can show one or the other, both, or neither. You can change this in [settings](../Settings.md).

## Matrix View

The second view, as seen in the right side of the top image, shows the immediate neighbours of the current note.

![](https://i.imgur.com/5GGJDeK.png)

### Multiple Hierarchies

If you have more than one [hierarchies](Hierarchies.md) in your settings, the Matrix view will show each of them separately

## Next/Previous View

This view shows a list of the next and previous notes, from the current note's perspective (3).

## Juggl View

![](https://i.imgur.com/roOYVhl.png)

If you have the [Juggl plugin](https://github.com/HEmile/juggl) installed, the Juggl view will provide an alternative to the Trail and Grid views. You can enable it in the settings under Views -> Trail/Grid/Juggl -> Views to show (activate the fourth option).

![](https://i.imgur.com/0Imhrgu.png)

The up and down arrows allow you to choose between the up and down graphs. The minus and plus signs allow you to filter the depth that the graph will display.

You can style the graph using [all Juggls styling features](https://juggl.io/Features/Styling/Styling).
One particular option that might be useful is to remove the edge labels. This can be done by going to the Juggl settings, clicking on "Open graph.css in default editor", and then adding

```css
edge {
  label: ;
}
```

## Visualisation View

This view can be opened by clicking the Dice icon on the left ribbon labelled "Breadcrumbs Visualisation".

It will open a modal with various settings at the top, and a space below for the visualisation.

If you want more options than given in the Visualisation view, it is recommended to use the [Juggl plugin](https://juggl.io/Juggl) which will also [render all edges in your Breadcrumbs graph](https://juggl.io/Features/Breadcrumbs+integration).

### Settings

The settings available for the view are as follows:

1. Type
2. Relation
3. Close Implied
4. No Unlinked

#### Type

Choose the visualisation to show. Find a list of visualisations below the settings heading.

#### Relation

Which relationship should be displayed?

1. Parent
2. Sibling
3. Child

If you have multiple [hierarchies](Hierarchies.md), each of the ↑, →, and ↓ relations will be merged into one for the visualisation view.
So if you have two hierarchies `↑: up →: ↓: down` and `↑: parent →: ↓: child`, then `up` and `parent` will be merged into one, and `down` and `child` will be merged into one.

#### Close Implied

Should the visualisation show the [implied relationships](Relationships.md)?
If you chose the Parent relation, for example, should the visualisation fill in all implied parents, or only show real parents?

#### No Unlinked

Show nodes with no incoming or outgoing links (called orphans in Obsidian graph view)

## Ducks View

The Ducks view shows you notes that don't have any Breadcrumbs 🦆

(This view does not open by default, you have to manually open it using the cmd `Open Ducks View`

![](https://i.imgur.com/j1xrnDA.png)

You can use the Filter to enter a Regular Expression.

If `Include` is checked, you will only see items that match the regex.

If it is _not_ checked, you will only see items that _don't_ match the regex

## Tree View

The Tree View shows the results of [Create Local Index](/docs/Commands/Create-Index#local-index) for the currently active note.

![](https://imgur.com/ZEJyEQ4.png)

Click the Flame icon to freeze the view on the current note. While the view is frozen, it won't update when you switch notes. Click the Snowflake icon to unfreeze it.
