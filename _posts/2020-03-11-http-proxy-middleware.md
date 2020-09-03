---
title: http-proxy-middleware
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

[http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware)
For node.js, redirect request to other port like "localhost: 3001" <br/>

```js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
 
const app = express();
 
app.use('/api', createProxyMiddleware({ target: 'http://www.example.org', changeOrigin: true }));
app.listen(3000);
```