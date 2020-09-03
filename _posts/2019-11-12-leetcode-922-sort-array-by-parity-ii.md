---
title: LeetCode:922. Sort Array By Parity II
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

> Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
> 
> Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
> 
> You may return any answer array that satisfies this condition.

**Example 1:**
```js
Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
```

**My solution: faster than 85%**
```js
var sortArrayByParityII = function(A) {
    var odd = 1,even = 0;
    var output = [];
    for(var i = 0; i < A.length; i++){
        if( A[i] % 2 == 0){
            output[even] = A[i];
            even += 2;
        }
        else{
            output[odd] = A[i];
            odd += 2;
        }
    }
    return output;
};
```

**other solution: same time, less memory use**
```js
var sortArrayByParityII = function(A) {
    var even = 0;
    for(var odd = 1; odd < A.length; odd += 2){
        if(A[odd] % 2 != 1){
            //find nu even index
            while(A[even] % 2 == 0){
                even += 2;
            }
           //swap
            var temp = A[odd];
            A[odd] = A[even];
            A[even] = temp;
           }
    }
        
    return A;
};
```