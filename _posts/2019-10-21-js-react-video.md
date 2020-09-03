---
title: 'JS: React video'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- Javascript
- React
tags: video 
---

React not support HTML 5 video:

```js
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```

Replace as:

```js
import video from '../video/Go_Pikachu.mp4'

<video src={video} controls width="420" height="360" > </video>
```