---
title: Figma to PRESENTA Getting Started
category: learn
date: 2022-10-28
---



This document outlines the best-practices as well as the limitations you have to be aware when importing a **Figma** document into **PRESENTA** Template.

## TL;DR

- Only a **single** Frame can be imported at a time
- Only elements **within** the Frame container are considered by the importer
- By mention an element *"in root level of the Frame"* means that it can't be in groups, components or nested frames
- Text boxes have to be in the **root level** of the Frame in order to be **dynamic**
- Text boxes requires an explicit fixed size of the textarea
- Text in groups/components/nested-frames will be converted as **static** graphic elements
- Parameters in text boxes need to be definet with the  following syntax: `{{name}}`
- Multiple text formatting in a single text box is supported
- Image boxes have to be in the **root level** of the Frame in order to be **dynamic**
- Medium/large images are better to be in the root level to avoid importer size limit
- Image boxes can be masked by one single shape in order to keep its dynamic nature



## More details

**Figma** is a powerful design editor with a lot of smart features meant to serve their rendering and prototyping engine.

**PRESENTA** is a image generation service for personalization purposes. It has its own rendering engine.

Both engines are very different.

The **Figma-2-PRESENTA converter** is a PRESENTA platform built-in feature that allows to import a **Figma Frame** into a **PRESENTA Project**. Its purpose is to give users the typical features of a modern design tool and at the same time providing  automation capabilities from PRESENTA Platform.

Understanding the differences if key to get the most out of both tools.

Following the above TL;DR list is pretty much what you need in order to design your own PRESENTA Template.

More details coming soon.