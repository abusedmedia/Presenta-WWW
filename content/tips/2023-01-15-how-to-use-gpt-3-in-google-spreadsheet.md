---
title: How to use GPT-3 in Google Spreadsheet
date: 2023-01-15 12:57:00 +0100
category: tips
tags: "#TIL #tip"
---



Here the steps to bring GPT-3 functionality into any Google Spreadsheet:

- Copy this [Spreadsheet](https://docs.google.com/spreadsheets/d/1csVtmpf_nXEtwUoR8ZkxhkIGxdlCAJMVfSsOUUxbI-Q/edit#gid=0)
- Got to `Extensions` > `Apps Script`
- Paste your https://openai.com/ API Key

Now you can write a formula such as:

```shell
=GPT3("What is a nickname for the full name "&A17&"?")
```

or 

```shell
=GPT3_RANGE($A$26:$A$28,$B$26:$B$28,A29)
```



