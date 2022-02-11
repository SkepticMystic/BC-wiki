## Dataview Notes

A _Dataview Note_ allows you to run any valid [Dataview `from` query](https://blacksmithgu.github.io/obsidian-dataview/query/sources/), and add Breadcrumbs to all notes that match the query.

The query must be wrapped in quotes, and folder names must be wrapped in **double** quotes.
Therefore, to avoid confusing Yaml, you need to wrap the entire query in single quotes, so that folders can be wrapped in double quotes.

The query is passed directly into the Dataview API, so you can troubleshoot it by running `app.plugins.plugins.dataview.api.pages(query: string)` in the Obsidian console

![](https://cdn.discordapp.com/attachments/929513881041248266/936973322980302848/unknown.png)
