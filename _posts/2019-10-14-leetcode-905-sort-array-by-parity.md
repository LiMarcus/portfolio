---
title: 'LeetCode: 905. Sort Array By Parity'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- LeetCode
- Algorithm
- Javascript
- Sort
- Array
tags:
- Odd
- Even
---

Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

**Example 1:**

```
Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
```

**Note:**

* 1 <= A.length <= 5000
* 0 <= A[i] <= 5000

**My solution**

Using two pointer, one point next available space, one pointer switch from front to end, find even number;

```javascript
var sortArrayByParity = function(A) {
    let firstEven= 0;
    for(let i = 0; i <= A.length; i++){
        if(A[i]%2 == 0){
            let temp = A[firstEven];
            A[firstEven] = A[i];
            A[i] = temp;
            firstEven++;
        }
    }
    return A;
};
```

**Optimize:**

Using QuickSort method

```javascript
var sortArrayByParity = function(A) {
    let i = 0, j = A.length - 1;
    while(i < j){ 
        if(A[i]%2 == 1 && A[j]%2 == 0){
            let tmp = A[i];
            A[i] = A[j];
            A[j] = tmp;
           }          
        if(A[i]%2 == 0) i++;
        if(A[j]%2 == 1) j--;
    }
    return A;
};
```