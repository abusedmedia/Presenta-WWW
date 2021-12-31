---
date: 2021-09-30
title: Cloud API Documentation
---


## System Overview

Before diving into the tech-specs, it's important to have a clear overview of the different **Platform components** involved and their purpose:

- The **Visual Editor:** create, manage and publish templates
- The **Cloud API:** generate documents programmatically
- The **CDN cache:** fast and free access to generated documents
- The **Usage Dashboard:** monitor the system usage and costs


## The Visual Editor

Before using our **Cloud API** to generate documents you need to set properly and publish the **Template**. Here the steps to figure the process out:

- **Pick, create or import** a Template
- **Configure** it properly
- Test and **Publish**

Now you're ready to use the Cloud API with the options documented below:

- Sync GET URL (image only)
- Sync POST API (image only)
- Async POST API (all formats, single and multi-frames)



## Image Render (sync)

To render a data-driven image you can use the sync-API in two flavours. 
In both cases you need to publish the template from within the editor and get the relative **TemplateID** (see section above).

### GET URL [/url]

This is the quickest way to start generating data-driven images, it's just an URL:

```js
https://cloud.presenta.cc/v1/url/<TemplateID>/?main=Hello
```

<!-- Click <a href="https://cloud.presenta.cc/v1/url/<TemplateID>/?main=Hello" target="_blank">this URL</a> to see a real example. -->

You need to include your **TemplateID** as well as all the parameters required by your template.

You will get: 

```js
<Image source>
```

Only the first call for each unique URL will count toward the generation amount in the current month, the subsequential calls will be served by the CDN, which is way more fast and cheap.

By "unique URL" we mean a unique combination with TemplateID and parameters with relative value.



### POST API [/render]

There's a more technical version using a POST endpoint:

```js
fetch('https://cloud.presenta.cc/v1/render/<TemplateID>', {
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

By calling the **POST API** will always generating a new image. It means that each API call will count toward the generation amount.

If you don't want to generate each time a new image, you should use the cached URL the API response gives to you.




## Multi-Frame Document Export (Async)

The multi-frame API allows to generate documents that contains several frames. Depending of the exported format, you can get different document types:

- **PDF**: a regular multi-page pdf document
- **GIF**: an animated GIF
- **PNGs**: The list of PNG sequence, zipped

Before making any call, you have to create a **PRESENTA project** in the editor and **publish** it for API purpose:

Then, you can build your payload to generate a data-driven document.

### POST API [/export]

**Simple mode:** pass a flat object, the document will be exported as the project already is, with the elements modified according to the passed object:

```js
fetch('https://cloud.presenta.cc/v1/export/<ProjectID>', {
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
fetch('https://cloud.presenta.cc/v1/export/<ProjectID>', {
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

In both cases, you will get:

```js
{
	"url": "https://app.presenta.cc/cdn/...",
	"job": "XXXXXXXXX"
}
```

### POST API [/job]

The `url` **will be available at some point in time**. 
You can use the `job` id to know if the export task has finished:

```js
fetch('https://cloud.presenta.cc/v1/job', {
	method: 'POST',
	body: JSON.stringify({
		id: 'XXXXXXXXX'
	})
})
```

```js
{
  "url": "https://app.presenta.cc/cdn/...",
  "status": "progress"
}
```


## The CDN cache

Each generated files will be available through our fast CDN for the current month only. After that period, the file url will expire.
If you need the same file, you have to generate it again, making a new cached file.
A persistent cache is not available at the moment.

