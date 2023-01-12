---
title: Figma Update Button
category: learn
date: 2023-01-10
public: true
tags: "#figma #automation #template"
---

We're excited to release one of the most requested feature in our **PRESENTA** platform: the ability to update the template without re-importing it from **Figma**.

**PRESENTA** allows to create templates from **Figma**. Our converter takes a **Figma Frame** (using the Figma API) and converts it as **PRESENTA** template in seconds. You can learn more about it [here](/blog/figma-to-presenta-getting-started).

Before today, if you edit the Figma document, you had to re-import the Figma Frame in a new PRESENTA document. That didn't scale very well for fast quick iterations on templates.

From now on, any PRESENTA template has a nice button to update from the linked Figma document. By pressing it, after a few seconds, your **PRESENTA** template will be updated automatically:

<video src="/blog/figma-update-button.mp4" autoplay loop muted controls></video>

This way you can continue to refine of change in later time your templates easily.

By updating a template you still need to explicitly publish again the API/URL. This way if the import update went wrong , the published template won't be affected.
