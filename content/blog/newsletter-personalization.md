---
title: Newsletter Personalization
date: 2023-01-02
category: features
social: true
---

To add a personal touch to commercial email, there isn't a better way than adding an engaging image that **looks designed for every specific user**.

With **PRESENTA**, you can design and configure a dynamic image that **gets rendered on-the-fly** when a specific person open her own email. The image can be personalized with some parameters, parameters that come from your audience database, that you can pass alongside the image URL.

Usually, a newsletter is sent by specialised tools such as **MailChimp** or **MailJet**. 

If you're using other tools, don't worry, almost any newsletter tools out there are compatible as well. The only requirements are:

- Support for merge-tags (or dynamic tags)
- Support for basic HTML snippet or IMG tag



## Create a dynamic image for a newsletter

The first step is to design the template. You can use [Figma](https://www.figma.com) (and use its incredible community resources) to do it. There's a [quick guide](/blog/figma-to-presenta-getting-started) on how to do it properly.

Let's find some inspiration from the Figma [community](https://www.figma.com/community):

![](/blog/newsletter-personalization/00-figma-inspiration.png)

After picked the template we like the most, let's adapt a little bit for our idea. The most important part is not to forget to add a parameter that will be used for the personalization:

![](/blog/newsletter-personalization/01-figma.png)

The next step is to import the Figma template into **PRESENTA**. There is a 1-click converter that does the job, just put the **Figma Frame URL** and you're done:

![](/blog/newsletter-personalization/02-figma-import.png)

Now we can preview the template in **PRESENTA**. If everything is as expected, we can move on and publish it as dynamic URL, using the relative button:

![](/blog/newsletter-personalization/03-presenta-imported.png)

Once published, we can test the dynamic template in the **testing panel**. All the parameters should be visible and editable in that panel:

![](/blog/newsletter-personalization/04-presenta-test-parameters.png)

Now, the template is ready to be integrated into the newsletter tool. 

Before that, we need to specify the dynamic tags that will be transformed info real information, such as `name` or `company` from the newsletter tool. 

In **MailChimp** they are called **Merge-Tags** (such as `*|FNAME|*`), in **MaiJet** are **Variables** (such as `[[data.firstname]]`), in other tools they might have different names, in any case, we need to **map** every dynamic tag with existing **PRESENTA** parameters:

![](/blog/newsletter-personalization/05-merge-tags-integration.png)

Time to grab the image URL to move on to the newsletter tool:

![](/blog/newsletter-personalization/06-grab-url-dynamic-image.png)

In the newsletter tool (**MailChimp** in this case) we integrate the dynamic image URL  **copied from PRESENTA** using the HTML block:

![](/blog/newsletter-personalization/07-paste-in-mailchimp.png)

In case you're using **MailJet** instead, here the equivalent integration with its own **Merge-Tag** syntax:

![](/blog/newsletter-personalization/08-paste-in-mailjet.png)

That's all. Now, all the people that will receive and open their email will get a personalized, on-the-fly generated image!

