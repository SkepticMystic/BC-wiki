## Tag Notes

Similarly to [Folder Notes](Alternative%20Hierarchies.md#folder-notes), you can use your existing _tag_ structure to set up hierarchies.

Choose the note you'd like to act as the index, and add `BC-tag-note: #Tag` to the note's metadata. This will take all _other_ notes with that tag, and have them point upwards to that tag note.

By default, it will use the first field name it can find. But you can also specify which field name to use by adding `BC-tag-note-field: fieldName` to the folder note's metadata.

![](https://imgur.com/eONpeWH.gif)
