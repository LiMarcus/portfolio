---
title: 'Jekyll: different pages js file conflict'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
tags: Script
categories:
- Jekyll
---

I add a new word cloud on categroies page by using [wordcloud2](https://github.com/timdream/wordcloud2.js/), but it shows errors in my tags apge, because I set all js files as *document.load* , it running js file when web is loaded and * getElementbyId* will return null error.

**Solution:**

In _include/ scripts.html, add

![script]({{ site.url }}{{ site.baseurl }}/assets/images/2019-10-18_script.PNG)


These code can add Javascript depends on which layout are visited by user currently.