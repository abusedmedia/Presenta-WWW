---
title: Speed Up Puppeteer - 3 simple tips
category: tech
date: 2022-03-01
public: true
tags: "#puppeteer #javascript"
---

Here the three most important tips we've learned along the way while building our API infrastructure based on Puppeteer to speed up the execution of Chromium browser using Puppeteer library.

## Content

1. Use Local Cache

2. Browser Single Launch

3. Inject HTML



## Local Cache

Let Chromium to reusing the already downloaded files of previous sessions by setting the `--user-data-dir` argument when launcing the browser. This way images and fonts will be served much quicker:

```js
'--user-data-dir=./tmpusr'
```

Of course, this tip works well as much as you reuse same resources across instance calls. If your use-case is about fetching always different websites, this helps very little.



## Single Launch

Reuse the same Browser instance instead of lauching it for every session. Launch it on every request is significantly slow:

```js
// keep this reference for next requests
browser = await puppeteer.launch({...})
                                  
// so, don't close it with browser.close()
```

Reusing the same browser instance is a smart tip, be aware that you have to close it and reopen a fresh browser after a while since it tends to memory leak after a number of uses (depending of your machine, this number can be 20-50 sessions).



## Set the HTML

Instead of loading from remote the page you want to process, inject it with `page.setContent` because it's faster:

```js
await page.setContent(html)
```

This is trivial, fetching remote content is significantly slower than using local stuff. Of course, this can be exploited only if your use-case allows to use in-memory pre-loaded assets of assets on local disk.
