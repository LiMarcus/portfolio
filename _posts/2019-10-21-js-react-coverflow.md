---
title: 'JS: react-coverflow'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- Javascript
- React
tags: carousel 
---

Today, I add [react-coverflow](http://andyyou.github.io/react-coverflow/) in my website, this Multi-item carousel is very beautiful and easily to use;

![gallery]({{ site.url }}{{ site.baseurl }}/assets/images/2019-10-21_gallery.PNG)

Here is the code:

`npm install react-coverflow`

**JS**

```js
import React from 'react';
var Coverflow = require('react-coverflow');

var fn = function () {
  /* do you want */
}

class Gallery extends React.Component {
  render() {
    return (
      <Coverflow
        // width={960}
        // height={480}
        // displayQuantityOfSide={2}
        // navigation={false}
        // enableHeading={true}
      >
        {/* <div
        onClick={() => fn()}
        onKeyDown={() => fn()}
        role="menuitem"
        tabIndex="0"
      >
      </div> */}
        <img src={require('../images/img1.jpg')} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
        <img src={require('../images/img2.jpg')} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
        <img src={require('../images/img3.jpg')} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
      </Coverflow>
    )
  }
}

export default Gallery;  
```

I didn't find the properties of background, so I change background color in CSS

**CSS:**

```css
.coverflow__container__1P-xE{
    background: #fafafa !important;
}
```