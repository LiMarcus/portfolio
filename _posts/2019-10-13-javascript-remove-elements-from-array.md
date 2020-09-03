---
title: 'Javascript: remove elements from array'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- Javascript
- Array
---

**1. Rmoving from end:**

```javascript
var ar = [1, 2, 3, 4, 5, 6];
ar.length = 4; // set length to remove elements
console.log( ar ); //  [1, 2, 3, 4]
```

```javascript
var ar = [1, 2, 3, 4, 5, 6];
ar.pop(); // returns 6
console.log( ar ); // [1, 2, 3, 4, 5]
```

**2. Rmoving from head:**

```javascript
var ar = ['zero', 'one', 'two', 'three'];
ar.shift(); // returns "zero"
console.log( ar ); // ["one", "two", "three"]
```

**3. Uisng "splice" to remove**

```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```

**4. Uisng "filter" to remove**

Filter returns a new array.

```javascript
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var filtered = array.filter(function(value, index, arr){

    return value > 5;

});

//filtered => [6, 7, 8, 9]
//array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
```

**5. Uisng "delete" to remove**

Delete doesn't affect length or index, it just make that space undefined;

```javascript
var ar = [1, 2, 3, 4, 5, 6];
delete ar[4]; // delete element with index 4
console.log( ar ); // [1, 2, 3, 4, undefined, 6]
alert( ar ); // 1,2,3,4,,6
```

**6. Clear or Reset a Array**

Reference variable to new empty object;

```javascript
var ar = [1, 2, 3, 4, 5, 6];

//do stuff

ar = [];

//a new, empty array!
```

But for two or more variables both reference to same object, we maybe forgot clear one of them;

```javascript
var arr1 = [1, 2, 3, 4, 5, 6];

var arr2 = arr1;  // Reference arr1 by another variable 

arr1 = [];

console.log(arr2); // Output [1, 2, 3, 4, 5, 6]

```

So, follow the #1 method to set length to 0, set orignal object to empty;

```javascript
var ar = [1, 2, 3, 4, 5, 6];

console.log(ar); // Output [1, 2, 3, 4, 5, 6]

ar.length = 0;

console.log(ar); // Output []
```




**Reference:**

https://love2dev.com/blog/javascript-remove-from-array/