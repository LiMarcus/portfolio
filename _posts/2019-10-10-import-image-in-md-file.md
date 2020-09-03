---
title: ".md: Import image"
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories: 
- Markdown
- Chrome DevTools
tags:
- Image Url
---

# How to write images url correctly in .md file?

Today, I wrote a markdown file for my website, everything worked perfect when I checked it in preview.

![preview]({{ site.url }}{{ site.baseurl }}/assets/images/2019-10-10_preview.PNG)

But unfortunately, I couldn't see images when I post .md file on my blog website.

![errorImg]({{ site.url }}{{ site.baseurl }}/assets/images/2019-10-10_errorImg.PNG)

I checked web page by developer tools, then found that /assets floder is inside /blog directory.  

![source]({{ site.url }}{{ site.baseurl }}/assets/images/2019-10-10_source.PNG)

So I add /blog before old image link, the images come back again!

![imagelink2]({{ site.url }}{{ site.baseurl }}/assets/images/2019-10-10_imagelink2.PNG)

This is my first time to write blog on Jekyll webstie, I checked Doc about Image standard. They suggest people using 

```
{% raw %}{{ site.url }}{{ site.baseurl }}/assets/images/{% endraw %}
```

It doesn't show images in my web page. I remeber **{site.url}** is my Github base url and **{site.baseurl}** is my repositories name. My repositories name is "blog", What a coincidence! So I replace my image link as:

![newLink]({{ site.url }}{{ site.baseurl }}/assets/images/2019-10-10_newLink.PNG)

Those two ways both working, but I think the frist one is retrive image sources from local directory and second one is retrive from url link, maybe the first one execute  more fast. I will update this blog when I know more about browser machanism and Jekyll.

At begin, I used **.png** as image file postfix, when I run it in local host, all images can show correctly. But it should be **.PNG** which I get screen shot by Snipping Tool, if not, all images can't find in website.