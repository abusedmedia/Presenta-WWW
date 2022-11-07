---
title: Scriptable Images
category: exploration
date: 2022-04-25
cover: https://cache.presenta.workers.dev/zGywhb2oJn:ah8cqUtoW?&term=tech&title=Scriptable+Images&subtitle=Exploration
---

**PRESENTA Platform** allows to generate data-driven images and PDFs by using an API infrastructure on top of Puppeteer and Chromium. 

> This is not a **novel** idea. 

What we find interesting though (and not so common) is the concept of **"scriptable images"** that we're exploring within our platform.

## What is a Scriptable Image

In simple terms, it's an image that contains logic (as code for now) in order to transform itself before sending it to the user.

Following some examples.

## Random number

Let's say, we want to print a random number on our image, so every request will contain a different number.

We need to define a parameter within the template, `random` in this case:

<div class="img">

![](/blog/scriptable-images/a01.png)

</div>

Then, we need to wire that parameter with the code, using the `Math.random` function:

<div class="img">

![](/blog/scriptable-images/a02.png)

</div>

Every time the image is requested, the code is executed and a new random number is printed out.

This is the proof with a bunch of requests:

<div class="img">

![](/blog/scriptable-images/a03.gif)

</div>



## Swap image content

In this example we want to change the content according to a parameter value. By default we want to show some content, if the parameter exists, we want to change that content.

Let's prepare two different contents in our template:

<div class="img">

![](/blog/scriptable-images/b01.png)

</div>

Then, create the condition to change the content according to the parameter `special`:

<div class="img">

![](/blog/scriptable-images/b02.png)

</div>

Here the generation by playing with the parameter:

<div class="img">

![](/blog/scriptable-images/b03.gif)

</div>

## Change the size of an element

In this example we want to change the dimension of a graphic element based on the value of a parameter, let's say a progress bar.

So, we need to define the graphic element we want to be dynamic:

<div class="img">

![](/blog/scriptable-images/c01.png)

</div>

Then, use the parameter `progress` in the CSS property:

<div class="img">

![](/blog/scriptable-images/c02.png)

</div>

Finally, let's feed the template with some values:

<div class="img">

![](/blog/scriptable-images/c03.gif)

</div>


## Use a color scheme strategy

In this last (slightly more elaborated) example we want to change the look&feel of a graphic image by passing a **single** parameter to define a different color set. This is the template:

<div class="img">

![](/blog/scriptable-images/d01.png)

</div>

Next, we need to define the attribute we want to make dynamic for each element:

<div class="img">

![](/blog/scriptable-images/d02.png)

</div>

Then, we need to define the source palette and the logic to exploit the parameter:

<div class="img">

![](/blog/scriptable-images/d03.png)

</div>

Here the results according to the passed parameter:

<div class="img">

![](/blog/scriptable-images/d04.gif)

</div>


## Final thoughts

This is an initial exploration, we are very excited so far. We want to explore further, trying to push the limits of this concept.

For questions, reach us on [Twitter](https://twitter.com/PresentaSw).

