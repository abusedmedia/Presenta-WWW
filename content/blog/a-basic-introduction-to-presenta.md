---
title: A basic introduction to PRESENTA
category: tutorial
date: 2022-05-14
public: true
tags: "#martech #marketing #automation"
---

In this post you'll be guided to create a basic dynamic banner (just text) that you can integrate easily in [email platforms and website](/blog/why-you-need-presenta) as well.

## A simple text banner

In this case we're going to create a dynamic banner to use within **Mailchimp** platform. Mailchimp uses the so-called **Merge Tags** to personalize the body of the email. We are going to use the same tags in **PRESENTA**.

Once you've create a new **Project** and an empty **Frame**, add a Text Block:

<div class="img">

![](../blog/a-basic-introduction-to-presenta/01.png)

</div>

Then, open the testing panel to try the **API**:

<div class="img">

![](../blog/a-basic-introduction-to-presenta/02.png)

</div>

You can play with different value:

<div class="img">

![](../blog/a-basic-introduction-to-presenta/03.png)

</div>

then add the Mailchimp Merge Tags and copy the URL:

<div class="img">

![](../blog/a-basic-introduction-to-presenta/04.png)

</div>

Here the copied URL used within a Mailchimp campaign:

<div class="img">

![](../blog/a-basic-introduction-to-presenta/05.png)

</div>

Finally, the email received in the inbox:

<div class="img">

![](../blog/a-basic-introduction-to-presenta/06.png)

</div>




## Using parameters

To extend a little bit the previous example discovering more capabilities, let's add a `parameter` within the Text Block in order to have more control of the output.

In this case a sentence gets updated with the passing value, that represent only a name and not the whole sentence. Furthermore, a different text style can be added on a specific portion of the text (for the name in this case).

We need to update the API template opening the API panel:

<div class="img">

![](../blog/a-basic-introduction-to-presenta/07.png)

</div>

Next, we need to add a custom parameter specifing the parameter name and value as well:

<div class="img">

![](../blog/a-basic-introduction-to-presenta/08.png)

</div>

Now, as before, to integrate it in other platform, just copy/paste the URL of the template.