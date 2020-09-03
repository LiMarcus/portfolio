---
title: 'JS: Object.assign()'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

[source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
> Using Object.assign() to copy and merge objects:<br/>
> `Object.assign(target, source);`<br/>
> find one or more `source` object to `target` object, and return `target ` object


**Example:**
```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```

**Clone**

```js
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

**Deep Clone** <br/>

For deep cloning, we need to use other alternatives because Object.assign() copies property values. If the source value is a reference to an object, it only copies that reference value.

**Merge**

```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
```

**Merge with same properties**

```js
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```