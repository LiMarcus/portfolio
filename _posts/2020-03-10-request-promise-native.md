---
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
title: request-promise-native
---

[request-promise-native](https://www.npmtrends.com/request-promise-native)

1. npm install -save request-promise-native
2. const rp = require('request-promise-native');
```js
     const url = "https://weather.gc.ca/rss/city/on-82_e.xml";
    let data = await rp({ uri: url, simple: true });
    console.log(data);
```