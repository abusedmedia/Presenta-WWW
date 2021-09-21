---
date: 2021-09-21
title: How to create personalized newsletter headers with PRESENTA platform
category: tutorials
---

<mark>**Personalized newsletters**</mark> is a key aspect in any **Marketing Automation** strategy. 

With **PRESENTA** you can <mark>generate thousand</mark> of personalized headers automatically, ready to be included in your newsletter campaigns.

In this walk-through you can see how to configure a **PRESENTA Data-Driven Template** to generate thousand of personalized and unique images, one for each of your recipient.

## Design the template

You can choose a pre-built template and customize it further or start from scratch and create your very own template with a visual editor:

![](design.gif)

## Set the dynamic properties

We need to tell the software which are the dynamic properties. Set a meaningful and unique name to each object we want to be dynamic. It can be text content, image url, shape color or even a QRCode url as well:

![](set.gif)

## Publish the template

Publish the template and grab the URL to test it with its default parameters:

![](publish.gif)



## Test the parameters

Now it's time to test the parameters to see how it looks with different content:

![](test.gif)

You can test with your browser using this URL:

```html
https://app.presenta.cc/f/render/?curl=zGywhb2oJn&purl=3hIW3WhkK
```

and adding this portion at the end of it (you can change the **SomeName** value):

```html
&name=SomeName
```

and also this one too:

```html
&surname=SomeSurName
```



## Integrate in your Newsletter software

Every Newsletter software allows to add little snippet of HTML code. Usually adding the following HTML code is enough to include the dynamic image:

```html
<img src="<THE-PRESENTA-TEMPLATE-URL-WITH-PARAMS" />
```

### MailChimp integration

![](mailchimp.jpg)

Here the HTML snippet that include the image with the merged tags of MailChimp (dimensions may change depending of the template):

```html
<div class="mcnTextContent">
  <img class="mcnImage" style="width:100%" src="https://app.presenta.cc/f/render/?curl=zGywhb2oJn&purl=3hIW3WhkK&name=*|FNAME|*&surname=*|LNAME|*" />
</div>
```

### MailJet integration

![](mailjet.jpg)

![](mailjet2.jpg)

Here the HTML snippet that include the image with the merged tags of MailJet (dimensions may change depending of the template):

```html
<img style="width:600px;height:300px;"  src="https://app.presenta.cc/f/render/?curl=zGywhb2oJn&purl=3hIW3WhkK&name=[[data:firstname]]&surname=[[data:name]]" />
```

## Conclusion

That's all folks! Hope this little walk-through has been useful for your next **Marketing Automation Campaign** with **Data-Driven images**.