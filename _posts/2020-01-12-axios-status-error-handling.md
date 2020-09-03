---
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
title: 'axios: status error handling'
---

My backend check user register information, if user submit wrong data, backend will send back response status 404 and error message.

```
    const {error} = registerValidation(req.body);
    if(error) return res.status(404).send(error.details[0].message);
```

I try to show error message to user

```
      .catch((error) => {
        console.log(error);
      })
```

![error]({{ site.url }}{{ site.baseurl }}/assets/images/2019-10-20_axios-error.PNG)