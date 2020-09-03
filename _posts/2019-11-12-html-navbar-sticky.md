---
title: 'CSS:  Sticky'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

[resource](https://www.w3schools.com/css/css_positioning.asp)

```html
<html>
<head>
<style>
div.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 5px;
  background-color: #cae8ca;
  border: 2px solid #4CAF50;
	z-indedx: 1000000000;
}
</style>
</head>
<body>
<div class="sticky">I am sticky!</div>
```