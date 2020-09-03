---
title: 'LeetCode: 1122. Relative Sort Array'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories: 
- LeetCode
- Array
- Sort
---

> Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
> 
> Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear >in arr2 should be placed at the end of arr1 in ascending order.

**Example:**

```
Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
```

**My solution: less memory use than 100%, faster than 85%**

```js
var relativeSortArray = function(arr1, arr2) {
  var array2D = [];
  var output = [];
  var len = arr2.length;
  for( var y = 0; y <= len; y++){
      array2D[y] = new Array();
  }
  arr1.sort((a, b) => a - b);
  for(var x = 0; x < arr1.length; x++){
      var index = arr2.indexOf(arr1[x]);
      if(index >= 0){
          array2D[index].push(arr1[x]);  
      }
      else{
          array2D[len].push(arr1[x]);
      }  
  }
  
  for(var i = 0; i <= len; i++ ){
      output = output.concat(array2D[i]);
  }
  
  return output;
};
```