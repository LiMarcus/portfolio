---
title: 'Localhost Fetch API: meet CORS'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

if we meet `No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.` <br/>

Don't worry, This occurs if the server hosting the javascript code above does not present the Access-Control-Allow-Origin header, or the value does not match your local host. During development, you can workaround the issue with the **Moesif Orign & CORS Changer** extension in the Chrome Web Store.