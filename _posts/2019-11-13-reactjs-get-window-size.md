---
title: 'React.js: Get window size'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories: 
- JavaScript
- React
---

Thank[Daniel Iwaniuk ](https://www.hawatel.com/blog/handle-window-resize-in-react/)

**Related Source:**

```js
// This will return the width of the viewport
var intFrameWidth = window.innerWidth;

// This will return the width of the frame viewport within a frameset
var intFrameWidth = self.innerWidth;

// This will return the width of the viewport of the closest frameset
var intFramesetWidth = parent.innerWidth;

// This will return the width of the viewport of the outermost frameset
var intOuterFramesetWidth = top.innerWidth;

```

**My Code:**

```js
class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 2
    }
  }
  updateDimensions() {
    console.log(window.innerWidth);
    if(window.innerWidth < 625) {
      this.setState({ num: 0 });
      console.log(this.state.num);
    } 
  }
  componentDidMount() {
    this.updateDimensions();
  }
	render() {
    return (
      <Coverflow
        width={960}
        height={480}
        displayQuantityOfSide={this.state.num}
        navigation={false}
        enableHeading={false}
        enableScroll={false}
      >
			</Coverflow>
    )
  }
}
```