---
title: 'Free CDN: jsDelivr+Github'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

**CDN** : Content Delivery Network <br/>

1.Find the release selection in Github respository


![release]({{ site.url }}{{ site.baseurl }}/assets/images/2020-09-12_jsDelivr_release.PNG)

2.Find the release version or create a new release


![version]({{ site.url }}{{ site.baseurl }}/assets/images/2020-09-12_jsDelivr_release_version.PNG)

3.Using jsDelivr fetch resource

```
https://cdn.jsdelivr.net/gh/[username]/[repository]@[version]/[file directory]
https://cdn.jsdelivr.net/gh/LiMarcus/portfolio@1.0/assets/css/timeline.css
```

4.we can omit release version or compress JS/CSS file

```
// load jQuery v3.2.1
https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/dist/jquery.min.js

// load version range rather than specific version
https://cdn.jsdelivr.net/gh/jquery/jquery@3.2/dist/jquery.min.js   https://cdn.jsdelivr.net/gh/jquery/jquery@3/dist/jquery.min.js
 
// omit version number to get newest version
https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.min.js
 
// add “.min” to  any JS/CSS to get compressed file, if not exist, generate automatically. 
https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/src/core.min.js
 
// add '/' in the end to get directory list
https://cdn.jsdelivr.net/gh/jquery/jquery/
```