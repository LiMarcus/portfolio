---
title: 'JS: wordcloud2.js'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
tags: Wordcloud
categories:
- Javascript
- Animation
---

I add [wordcloud2](https://github.com/timdream/wordcloud2.js/) in my blog

Here is my code:

```javascript
 var db = [
        { "word": "test", "freq": 2 },
        { "word": "name", "freq": 5},
        { "word": "false", "freq": 6 },
        { "word": "var", "freq": 4 },
        { "word": "test", "freq": 5 },
        { "word": "name", "freq": 2},
        { "word": "false", "freq": 8 },
        { "word": "var", "freq": 5 },
        { "word": "test", "freq": 6 },
        { "word": "name", "freq": 3},
        { "word": "false", "freq": 8 },
        { "word": "var", "freq": 2 },
        { "word": "test", "freq": 14},
        { "word": "name", "freq": 11},
        { "word": "false", "freq": 12 },
        { "word": "var", "freq": 6 },
    ]

    list = [];
    for (var i in db) {
        list.push([db[i]["word"], db[i]["freq"]])
    }


    var options = eval({
        "list": list,
        "gridSize": 16, // size of the grid in pixels,the larger the grid size, the bigger the gap between words.
        "weightFactor": 10, // number to multiply for size of each word in the list
        "fontWeight": 'normal', // 'normal', 'bold' or a callback
        "fontFamily": 'Times, serif', // font to use
        "color": 'random-light', // 'random-dark' or 'random-light'
        "backgroundColor": '#333', // the color of canvas
        "rotateRatio": 1, // probability for the word to rotate. 1 means always rotate
        //"drawMask": true, // visualize the grid by draw squares to mask the drawn areas.
        // maskColor : 'rgba(0, 0, 255, 0.8)';
        //"minSize": 10, // not work when set number over than 'freq'
        "shape": 'pentagon',
        "ellipticity": 1.5,
        "hover": '',
    });

    WordCloud(document.getElementById('word_cloud'), options);

```

css

```css
<div>
  <canvas id="word_cloud" class="word_cloud" width="800" height="400"></canvas>
</div>
```