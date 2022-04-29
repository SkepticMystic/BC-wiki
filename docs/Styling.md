This page lists different CSS snippets you can use to customise the look and feel of Breadcrumbs in your vault.

If you have some snippets you'd like to contribute, please feel free to clone this wiki and make a PR, or reach out to me over Github/Discord :)

## Snippets

### Hide All/Shortest Button in Trail View

If you have the [Trail View](https://github.com/SkepticMystic/breadcrumbs/wiki/Views#trailgrid-view) showing, you can use this snippet to hide the `All/Shortest` button if you never intend to use it:

```css
.BC-trail button.button-div {
  display: none;
}
```

### Change Numbered List Items in Matrix View to Bullets

Using this snippet will make the markers in the [Matrix View](https://github.com/SkepticMystic/breadcrumbs/wiki/Views#listmatrix-view) into bullets instead:

```css
.BC-Matrix li {
  list-style: disc;
}
```

### Hide Numbered List Items in Matrix View Entirely

This snippet will hide the numbering on items in the [Matrix View](https://github.com/SkepticMystic/breadcrumbs/wiki/Views#listmatrix-view):

```css
.BC-Matrix .BC-Matrix-square ol li::marker {
  color: transparent;
}
.BC-Matrix.BC-Matrix .BC-Matrix-square ol {
  padding-left: 10px;
}
```

### Remove all Buttons in the Matrix View

If you don't use any of the buttons in the [Matrix View](https://github.com/SkepticMystic/breadcrumbs/wiki/Views#listmatrix-view), use this snippet to hide them:

```css
.workspace-leaf-content[data-type="BC-matrix"] .view-content button {
  display: none;
}
```

### Style the Active Note in the Matrix View

If you have the setting `Treat Current Note as Implied Sibling` enabled, the current note will _always_ appear in the [Matrix View](https://github.com/SkepticMystic/breadcrumbs/wiki/Views#listmatrix-view). Use this snippet to style it differently:

```css
.BC-active-note div {
  color: var(--text-normal);
}
```

### Align the Items in the Matrix View to the Left

```css
.BC-Matrix-square {
  text-align: left;
  border: 0;
}
```

### Make long links in the Matrix View overflow instead of wrapping to the next line

```css
.BC-Matrix .BC-Link {
  width: 100%;
  padding-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### Make long links in the Tree View wrap to the next line instead of overflowing

```css
.BC-downs div {
  white-space: nowrap;
}
```
