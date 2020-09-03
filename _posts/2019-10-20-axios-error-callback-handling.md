---
title: 'axios: error callback handling'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- axios
tags: error-handling

---

My backend check user register input, If input data is wrong, it will send back status 404 error with "error detail" message;

```javascript
    const {error} = registerValidation(req.body);
    if(error) return res.status(404).send(error.details[0].message);
```

I try to show error message

```javascript
    axios.post('http://localhost:8888/api/register', {username: username, email: email, password: password })
      .then(res => {
        this.props.dispatch(setAuthState(true));
      })
      .catch((error) => {
        console.log(error);
      })
```

I get this 

![error]({{ site.url }}{{ site.baseurl }}/assets/images/2019-10-20_axios-error.PNG)

So I check axios doc and find we need to add response to handling error

```javascript
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```