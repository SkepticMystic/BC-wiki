If you are having trouble getting Breadcrumbs working, here are some steps you can take. 

Don't let this stop you from posting a bug report, but it's possible the issue is on your end, and that's ok; Breadcrumbs relies on the structure you provide, and that is going to be unique for everyone.

## Check your settings

Breadcrumbs has alot of [[settings]]. This allows for customisability, but can sometimes lead to Breadcrumbs not working as you intend.

The most important settings to check are the [[Hierarchies]] settings, and the [[Settings#Hierarchy Note|Hierarchy Note]] settings.

Make sure they're set up as you want. Please do ask me for help if something is unintuitve 🙂 

## Do you have any errors in the console?

You can open the Obsidian console by pressing `Ctrl + Shift + I`.

Check to see if there are any errors that mentions "Breadcrumbs", "graphs", or something related.

Press the Refresh Index button and see if any errors appear (Make sure to open up the nested log to look inside)

![](https://i.imgur.com/T3AGxCg.png)

If you do get an error related to Breadcrumbs, you can send me the console log so we can try get it working again.

It is also helpful if you click the link `VM123:456`. This will show you where the Javascript failed. You can send this to me as well.

![](https://i.imgur.com/8FSidTd.png)

## There were no errors, now what?

If you don't get any errors, then there are some more things you can check.

The next step is to go into settings and enable [[Settings#super-debug-mode]]. With this turned on, you will get alot of messages logged to the console.

Now, press Refresh Index, and open the console.

Open up the `Initialising Graphs` group. Then, depending on whether you have Dataview enabled, open up the `getDVMetadataCache` or `getObsMetadataCache` group. Inside that, look in the `dvCaches` group, or the `ObsCaches` group.

![](https://i.imgur.com/SMbQjcm.png)

Now, this will tell you how Breadcrumbs sees your files. You will see on `dvCache` for each file in your vault.

The first thing to do is scroll to the bottom of all the `dvCache`s and see if there is an error, or if it managed to complete.

If error, send me a message. If no error, continue to the next step.

Now, go to the next group, the `getNeighbourObjArr` group.
There will be alot more console logs here, multiple for each file.

Scroll to the bottom of all these logs, and again, see if you get an error. If there is an error, see which note it logged last, the one just before failing. It is likely that there is an issue with the metadata in that note. Feel free to message me and ask why it doesn't allow that. It's possible there's a bug from my side.