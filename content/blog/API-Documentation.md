---
date: 2021-09-30
title: API Documentation
category: tutorials
---

## For the impatiens

This URL generates an image on the fly. Copy and paste in the browser to test right now:

```shell
https://app.presenta.cc/f/render/zGywhb2oJn:TrFLYUna4?
	main=I code hard!
	&name=Mario Rossi
	&role=Devloper
	&pict=https://source.unsplash.com/random
```

Then, change the value of one or more parameters to generate variations of the template.



## The Visual Editor

Before using the API to generate documents you need to set a template properly in the visual editor.

For instance, you need to create and publish a template:

![](api-1.png)

Copy the **TemplateID** required in any API call:

![](api-2.png)

Set the parameters in the API request following the template configuration:

![](api-3.png)

## Image Render (sync)

To render a data-driven image you can use the sync-API in two flavours. 
In both cases you need to publish the template from within the editor and get the relative **TemplateID** (see above).

### GET URL

This is the quickest way to start generating data-driven images, it's just an URL:

```asciiarmor
https://app.presenta.cc/f/render/<TemplateID>/?main=Hello
```

You need to include your **TemplateID** as well as all the parameters required by your template.

You will get: 

```js
<Image source>
```

Only the first call for each unique URL will count toward the generation amount, the subsequential calls will be served by the CDN, which is way more fast and cheap.

By "unique URL" we mean a unique combination with TemplateID and parameters with relative value.



### POST API

There's a more technical version using a POST endpoint:

```js
fetch('https://app.presenta.cc/f/render/<TemplateID>', {
	method: 'POST',
	body: JSON.stringify({title: 'Hello'})
})
```

The above snippet creates the same result as the URL version.

You'll get:

```js
{
	"url": "https://app.presenta.cc/cdn/..."
}
```

By calling the **POST API** will always invalidate the cache by default, generating a new image. It means that each API call will count toward the generation amount.

If you don't want to generate each time a new image, you should use the cached URL the API response gives to you.



## Multi-Frame Export (Async)

The multi-frame API allows to generate documents that contains several frames. Depending of the exported format, you can get different document types:

- **PDF**: a regular multi-page pdf document
- **GIF**: an animated GIF
- **PNGs**: The list of PNG sequence, zipped

Before making any call, you have to create a **PRESENTA project** in the editor and **publish** it for API purpose:

Then, you can build your payload to generate a data-driven document.

### POST API

**Simple mode:** pass a flat object, the document will be exported as the project is, with the elements modified according to the passed object:

```js
fetch('https://app.presenta.cc/f/export/<ProjectID>', {
	method: 'POST',
	body: JSON.stringify({
		title: 'Hello',
		footer: 'Common String present in all frames',
		exportFileFormat: 'pdf' // default pdf, can be gif or png
	})
})
```

**Structured mode:** pass an object with the `frames` key to generate a new structure following the frames list:

```js
fetch('https://app.presenta.cc/f/export/<ProjectID>', {
	method: 'POST',
	body: JSON.stringify({
		footer: 'Common String present in all frames',
		title: 'This is default title',
		frames:[
			{frameID: 'Aj4', title: 'Hello, new title'},
			{frameID: 'Aj4', title: 'Other, new title'},
			{frameID: 'Aj4'}, // default title
			{frameID: 'g5F', text: 'Other Text'},
		]
	})
})
```

You will get:

```js
{
	"url": "https://app.presenta.cc/cdn/..."
}
```

The above url **will be available at some point in time**. A WebHook, if provided, will be called passing the following payload:

```js
{
  "url": "https://app.presenta.cc/cdn/...",
  "status": "success|error"
}
```



