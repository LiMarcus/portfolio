---
title: 'LeetCode: 238. Product of Array Except Self'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories: 
- LeetCode
- Array
---

> Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

**Example:**
```
Input:  [1,2,3,4]
Output: [24,12,8,6]
```

**Note**: Please solve it without division and in O(n). <br/>

**Follow up**:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

**My solution: faster than 42%**

```js
var productExceptSelf = function(nums) {
    var len = nums.length;
    var  fArray = [];
    var  bArray = [];
    var  output = [];
		
    fArray[0] = 1;
    bArray[len - 1] = 1;
    for( var i = 1; i < len; i++ ){
        fArray[i] = fArray[i-1] * nums[ i - 1];
    }
    for( var n = len - 2; n >= 0; n-- ){
        bArray[n] = bArray[ n + 1 ] * nums[ n + 1 ];
    }
    
    for(var x = 0; x < len; x++){
        output[x] = fArray[x] * bArray[x];
    }
    return output;    
};
```

**Optimization: faster than 99.84%**
```js
var productExceptSelf = function(nums) {
    var len = nums.length;
    var  fArray = [];
    var  output = [];
    fArray[0] = 1;
    for( var i = 1; i < len; i++ ){
        fArray[i] = fArray[i-1] * nums[ i - 1];
    }
    
    var b = 1;
    for( var n = len - 1; n >= 0; n-- ){
        output[n] = fArray[n] * b;
        b *= nums[n];
    }
    return output;    
};
```