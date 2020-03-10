---
title: Using Markdown in PRESENTA
date: 2020-03-04
category: howto
---

**PRESENTA** understands a bit of [markdown](https://daringfireball.net/projects/markdown/). 

There are two ways to exploit it when working on a presentation.

- in the text editor, by writing a subset of markdown 
- drag&drop a markdown file in the presentation list (file that uses the same markdown subset and `---` to separate slides)

## The markdown subset

Here what **PRESENTA** converts properly to its internal format:

- `# heading`: creates a main heading block
- `## heading`: creates a less important heading block
- `simply writing`: creates paragraphs
- `- item`: creates an unordered list
- `1. item`: creates an ordered list
- `> quote`: creates a quote

![](editor.gif)

## Drop a .md file

By using the above subset with `---` to separate slide, an `.md` file can be converted in a presentation with drag&drop in presentation list:

![](drop-markdown.gif)