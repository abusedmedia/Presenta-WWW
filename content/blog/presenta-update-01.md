---
date: 2019-12-24
title: PRESENTA update 2019/12
category: updates
---

This post opens a new category meant to communicate relevant updates of **PRESENTA** that usually bring new features, bug fixes and improvements as well.

## Let's take a step back first

**PRESENTA** was launched in September 2019 as public beta. Before that, it was private for a limited group of users. After the public launch, we've already known we had to refactor the codebase in order to support a proper long-term evolution.

After September 2019 we started the refactoring activity, that ended up a few days ago with the new release of **PRESENTA**, the one you can use right now.

Both the back-end and the front-end code has been heavily refactored adding some features, removing old dead code, adding preparatory functionalities for upcoming-features as well as removing (temporarily) some core features that require further work.

Let's see in detail what's happened with this release.

## What's new

### The editing experience

The biggest change, no doubt, has been in the editing experience from the user perspective. What was before very similar to other tools such as PowerPoint and Keynote, the typical sidebar with the slides and the main area on the right to add text and other content, now there's just one single place to work with slides.

In the previous version there were two main places, the "grid" view to handle the slides and their settings, the "edit single slide" view to actually add content and other further settings. Those two views represent a common pattern in other presentation tools but in **PRESENTA** that pattern always rang wrong to us.

Now, the main editor view allows editing both the presentation structure, adding, moving, deleting and configuring slides as well as the slide content such as adding text, images, embeds and so on.

![](feature.gif)

This is a big shift in terms of user experience. We believe this is the way to go for **PRESENTA**.

### Workspaces

**PRESENTA** will introduce workspaces at some point, the possibility to organize presentations in different buckets, called workspaces. The functionality is not active yet.

### Theme

The theming system has been redesigned from the ground up in order to support many more upcoming features. Right now it looks very similar to the previous one but behind the scene a lot has changed. Again, you'll see the possibilities shortly.

## What has been removed (temporarily)

### Asset manager

The old asset manager has been removed. A new completely redesigned tool will be introduced to support that functionality.

### PDF Export

The PDF export needs some more work in order to be released again. Just wait a little bit.

### Presentation thumbnail generator

Same as the PDF export, just wait for it.

## A note about the migration

Such a big update involved a lot of work to migrate properly the old document format with a new one. 

It has been a massive change from the technical perspective and potentially something in the migration might be missing. 

We worked hard to avoid any "content" loss, which means the text and assets shouldn't be compromised. There are some settings (such as theme settings) that might be lost or not properly converted. 

Since the way **PRESENTA** allows to customize the theme (very fast), it's not a big deal re-doing those theme settings.

## What's next

The upcoming, already planned, features for the next update are:

- Adding YouTube videos with control capability
- Re-introducing the PDF export

See you in the next release!