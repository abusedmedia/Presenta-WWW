---
title: The Low-Code Image
category: exploration
date: 2022-11-27
cover: https://cache.presenta.workers.dev/zGywhb2oJn:SfjEYhkuX?&term=tech&title=The+Low-Code+Image&subtitle=Exploration
---

## The IMG tag

In **February 1993**, Marc Andreessen (yes, [him](https://en.wikipedia.org/wiki/Marc_Andreessen)), one of the two original **Mosaic** browser engineers, proposed a **new HTML tag**, the `IMG`, to display bitmap files into web pages. Fascinating story, you can read further [here](https://thehistoryoftheweb.com/the-origin-of-the-img-tag/).

Eventually, the `IMG` tag got included in the HTML 2.0 specification **released in 1995** by the **W3C**.

> The Web would no longer be the same.

![](/blog/the-low-code-image/mosaic.jpg)

An image is a static file, and nowadays we consider it safe enough to accept it even in the most critical context in terms of security and privacy requirements: **email**.

Indeed, a sent/received email is a static piece of information that cannot be modified (unless the provider decided to).

There are cases where **dynamic contents** in email, and other contexts as well, can be useful, though.



## Dynamic images

It's not a novel idea. There are several services to generate images on-the-fly in order to automate asset production.

In general, such services generate images with a very limited set of variations and possibilities, usually only text labels and image URLs.

**PRESENTA** is an image generator service but with an engine that allows way more possibilities.

This is why this blog-post title: **The Low-Code Image**.

Indeed, it's possible to add chunks of code (javascript) in order to customize further the outcome, and several interesting variables can be exploited, such as:

- URL parameters
- Location of the requester
- Current date-time of the requester
- Further logic such as API fetch and more



## Examples





#### Example 1: Dynamic graphics

In this example 9 circles get a random radius and one of them (randomly picked) an accent color:

<p class="refreshImgOnClick">
    <img src="https://daily.presenta.workers.dev/zGywhb2oJn:ynpwlE0eu" />
    <span>Click to refresh and make your variation</span>
</p>



This is the code added to the template:

```js
var picked = Math.ceil(Math.random()*9)

for(var i=1; i<=9; i++){
  query['r' + i] = Math.ceil(Math.random()*50)
  query['c' + i] = picked === i ? '#FDD50E' : '#fff'
}
```



#### Example 2: Date aware

In this example, the current date is used to calculate the remaining days till the end of the year, shown both as text and bar size as well. **Tomorrow this banner will update itself automatically**:

<p class="refreshImgOnClick">
    <img src="https://daily.presenta.workers.dev/zGywhb2oJn:KYIvNqK5p" />
</p>


Here is the code using `dayjs` library:

```js
var today = dayjs()
var thisYear = today.year()
query.now = today.format('LLLL')
var endYear = dayjs(thisYear + '-12-31')
var diff = endYear.diff(today, 'day')
query.days = diff
query.w = 400 - (diff/356 * 400)
```





#### Example 3: Location aware

In this final, slightly more advanced, example the current location of the requester is used to make some distance calculations between two cities (New York and Hong Kong). Those numbers are used both as text and to calculate the yellow line length as well:

<p class="refreshImgOnClick">
    <img src="https://daily.presenta.workers.dev/zGywhb2oJn:6uuz1DSXG" data-props="geo_city=true&geo_latitude=true&geo_longitude=true" />
    <span>Click to refresh and make your variation</span>
</p>




This is the code added to the template:

```js
// calculate the distance between two coordinates, truncated for brevity
var distance = (lng, lat, lng2, lat2) => {...}

var nyLat = 40.7128
var nyLng = -74.0060

var hkLat = 22.3193
var hkLng = 114.1694

var olat = +query.geo_latitude || 0
var olng = +query.geo_longitude || 0

var d1 = Math.ceil(distance(olng, olat, nyLng, nyLat))
var d2 = Math.ceil(distance(olng, olat, hkLng, hkLat))

query.d1=d1
query.d2=d2

query.left = Math.ceil(d1/(d1+d2)*100)
query.right = 100-query.left
```







## The URL

**PRESENTA** allows configuring a graphic **Template** with dynamic behaviour. It allows to add run-time logic within the image template. An **URL** is what you'll get for the integration (and it's good enough for **newsletter**, **landing pages**, **social media bots**, etc.)

## Import from Figma

Last but not least, a **PRESENTA** Template can be imported from Figma. We do not want to reinvent the wheel, a very difficult wheel. We bet on Figma for that!

![](/blog/figma-link.png)
