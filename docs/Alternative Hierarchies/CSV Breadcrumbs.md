This feature allows you to set up hierarchies in your vault using a CSV file located in your vault.

This pairs well with [MetadataFrame](https://github.com/SkepticMystic/metadataframe).

## How to Use

- You give it the path to a CSV file in your vault (See the [settings tab options](https://github.com/SkepticMystic/breadcrumbs/wiki/Settings#CSV-Breadcrumb-Paths)).

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
