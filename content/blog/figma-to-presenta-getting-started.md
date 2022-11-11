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



## Figma vs PRESENTA 

**Figma** is a powerful design editor with a lot of smart features meant to serve their rendering and prototyping engine.

**PRESENTA** is a image generation service for personalization purposes. It has its own rendering engine.

Both engines are very different.

The **Figma-2-PRESENTA converter** is a PRESENTA platform built-in feature that allows to import a **Figma Frame** into a **PRESENTA Project**. Its purpose is to give users the typical features of a modern design tool and at the same time providing  automation capabilities from PRESENTA Platform.

Understanding the differences if key to get the most out of both tools.

Following the above TL;DR list is pretty much what you need in order to design your own PRESENTA Template.



## Single Frame

Only a **single** Frame can be imported at a time. A **Frame** in **Figma** is a **Project** in **PRESENTA**:

![](/blog/figma-to-presenta-getting-started/p01a.png)

You can grab the Frame URL using the contextual menu or by selecting the Frame and copy the URL from the browser address bar:

![](/blog/figma-to-presenta-getting-started/p01b.png)



## Elements within the Frame

Only elements **within** the Frame **container** are considered by the importer:

![](/blog/figma-to-presenta-getting-started/p02.png)

This can be exploited to keep additional elements, annotations or other element versions around the Frame without affecting the import process.



## Dynamic Text vs Static Text

Text boxes have to be in the **root level** of the Frame in order to be **dynamic**. 

By mention an element *"in root level of the Frame"* means that it can't be in groups, components or nested frames

Text in groups/components/nested-frames will be converted as **static** graphic elements

![](/blog/figma-to-presenta-getting-started/p03.png)



## Text box explicit size

Text boxes requires an explicit fixed size of the textarea. It's not strictly a requirement but without an explicit size, the textarea size will be set according to the text that contains. This can be problematic in dynamic Text box where you'd like to put other text, possibly longer than the default value.

![](/blog/figma-to-presenta-getting-started/p04.png)



## Parameters in Text

Parameters in text boxes need to be definet with the  following syntax: `{{name}}`

![](/blog/figma-to-presenta-getting-started/p05.png)



## Text formatting

Multiple text formatting in a single text box is supported

![](/blog/figma-to-presenta-getting-started/p06.png)



## Dynamic Image vs Embedded Image

Image boxes have to be in the **root level** of the Frame in order to be **dynamic**

Medium/large images are better to be in the root level to avoid importer size limit

![](/blog/figma-to-presenta-getting-started/p07.png)



## Mask an Image

Image boxes can be masked by one single shape in order to keep its dynamic nature



![](/blog/figma-to-presenta-getting-started/p08.png)





## Trouble-Shooting

Here a list of possible solutions for specific cases we're aware of:

- The Figma **Frame** container must have **Rotation** and **Corner radius** set to zero in order to be properly imported in PRESENTA.
- The Figma **Frame** container must be without **Effects** in order to be properly imported in PRESENTA.
- If there's a bitmap **cropped** with the Figma Image Crop tool, the image needs to be **flatten** in order to be properly positioned and resized in PRESENTA.