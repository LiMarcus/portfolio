---
title: 'MongoDB: update error'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

I try to update MongoDB collection by `_id`, but it is an `ObjectID`, I can't use number `_id`  which I got before to update it, finally, I find the answer: [Quora](https://www.quora.com/How-do-I-update-a-document-in-mongodb-using-_id-as-query-parameter) <br/>

Users can also override` _id` to something other than an ObjectID.

```js
var ObjectID = require('mongodb').ObjectID;
 
collection.update({"_id": ObjectID("5703....dd0")}, {$set:{"feedback": body.feedback}}, function(err, result){
    if (err) {
        console.log('Error updating object: ' + err);
        res.send({'error':'An error has occurred'});
    } else {
        console.log('' + result + ' document(s) updated');
        res.send(user);
    }
});
```