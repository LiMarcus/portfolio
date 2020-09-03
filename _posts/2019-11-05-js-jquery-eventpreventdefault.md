---
title: 'JS: jQuery event.preventDefault()'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- Javascript
- JQuery
---

**event.preventDefault():**

Use to stop action, ex: submit form, link from URL

```js
<!DOCTYPE html>
<html>
<body>
<form action="#">
  <label for="fname">First name: </label>
  <input id="fname" type="text">
  <label for="lname">Last name: </label>
  <input id="lname" type="text">
  <input id="submit" type="submit">
  <div></div>
</form>
<script>
  var form = document.querySelector('form');
  var fname = document.getElementById('fname');
  var lname = document.getElementById('lname');
  var submit = document.getElementById('submit');
  var message = document.querySelector('div');

  form.addEventListener('submit', function(e) {
    if (fname.value === '' || lname.value === '') {
      //e.preventDefault();
      message.innerHTML = 'You need to fill in both names!';
    }
  });
</script>
</body>
</html>
```