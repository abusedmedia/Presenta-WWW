---
title: Scripting
date: 2023-01-01
category: learning
public: true
---

> This document is in progress!

**PRESENTA** is a service that generates images **on-the-fly** using a **template** system and a **data-merge** mechanism in order to produce image **variations at scale**.

That's not all. **PRESENTA internal engine** is able to run **custom code** in order to expand variation possibilities by one order of magniture.

**Scripting** is a powerful capability, for a template, to run custom **javascript** code performing some logic before render the image.

You can read a couple of article [here](/blog/the-low-code-image) and [here](/blog/scriptable-images) on the topic before diving into the spec details.



## TOC

- The rendering flow
- Reading and writing the `query` object
- Fetch external sources
- Using included helper libraries (day.js, number.js, lodash.js)
- Geo and Time parameters
- Hide and show blocks



## The rendering flow

It's important to understand the flow during the rendering process after a **PRESENTA URL** is fetched:

- The URL parameters are collected into a `query` object.
- Additional properties are injected in the `query` object, such as `geo` and `time` properties.
- If there's some code in the script panel, the code is executed and the `query` object is accessible for read/write.
- The final `query` object is then used with the template in order to generate the image buffer.

This means that the `script` step is able to exploit both the URL and the injected parameters and modify or adding more parameters in the `query` object.





## Reading and writing the `query` object

The `query` javascript object is the payload that acts as a bridge from the URL to the rendered image.

Consider this URL:

```js
https://jit.presenta.workers.dev/zGywhb2oJn:z4zi9ZQ5B?name=John&age=20
```

The above parameters creates this `query` object:

```js
{
  name: 'John',
  age: 20
}
```

that renders the following image:

![](https://jit.presenta.workers.dev/zGywhb2oJn:z4zi9ZQ5B?name=John&age=20)

In the javascript panel you can read it this way:

```js
const {name, age} = query
```

and you can modify it according to some logic:

```js
const {age} = query

if(age < 18){
  query.name = 'Redacted'
}
```

The property `name` now will be overridden according to the `age` value.

This URL will render a different result:

```js
https://jit.presenta.workers.dev/zGywhb2oJn:z4zi9ZQ5B?name=John&age=14
```



![](https://jit.presenta.workers.dev/zGywhb2oJn:z4zi9ZQ5B?name=John&age=14)





## Hide and show blocks

In **PRESENTA** every block (text, image, svg, qrcade) has a name that is also its ID.

Our Figma importer uses the Figma layer name as Block name in PRESENTA document. They might be different because we performe some cleanup and sanification to remove special characters that might be problematic in our infrastructure.

Another reason why some blocks might have different names is that block names in the same document must be unique, therefore, Figma layers that have the same name will be differentiated a bit.

There are two way to handle such parameter, with URL parameter or using Script.

#### As URL parameter

All said that to explain that you can programmatically show/hide blocks by using their block name with the following syntax, assuming there's a block with the name `elem1`

```js
https://....../aaa:bbb/?title=Some+title&$elem1=hidden
```

By default all blocks are visible. To hide a specific one, you have to add a URL parameter prepending `$` to the name and explicitly set the `hidden` value, such as `$elem1=hidden`

#### As Script

In the Script panel, add the following javascript to hide the same block as above:

```js
query.$elem1 = 'hidden'
```

Of course, the main difference between URL parameter and Script is that in the latter you have much more freedom to configure the behaviour of the template.

Suppose you have a template with 3 blocks and you want to show only one according to some logic:

```js
const blocksHidden = ['$elem1', '$elem2', '$elem3']

// hide all
blocksHidden.forEach(d => query[d] = 'hidden')

// randomly show only one of these
const idx = parseInt(Math.random()*blocksHidden.length)
const el = blocksHidden[idx]
query[el] = ''
```

