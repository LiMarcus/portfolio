---
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
title: 'Node: error"something already running on port"'
categories: 
- Node
---

**solution**

```
  sudo lsof -i tcp:4444
  kill -9 11676
```