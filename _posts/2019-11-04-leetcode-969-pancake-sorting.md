---
title: 'LeetCode: 969. Pancake Sorting'
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

Given an array A, we can perform a pancake flip: We choose some positive integer k <= A.length, then reverse the order of the first k elements of A.  We want to perform zero or more pancake flips (doing them one after another in succession) to sort the array A.

Return the k-values corresponding to a sequence of pancake flips that sort A.  Any valid answer that sorts the array within 10 * A.length flips will be judged as correct.

**Example:**
```
Input: [3,2,4,1]
Output: [4,2,4,3]
Explanation: 
We perform 4 pancake flips, with k values 4, 2, 4, and 3.
Starting state: A = [3, 2, 4, 1]
After 1st flip (k=4): A = [1, 4, 2, 3]
After 2nd flip (k=2): A = [4, 1, 2, 3]
After 3rd flip (k=4): A = [3, 2, 1, 4]
After 4th flip (k=3): A = [1, 2, 3, 4], which is sorted. 
```

**Example:**
```
Input: [1,2,3]
Output: []
Explanation: The input is already sorted, so there is no need to flip anything.
Note that other answers, such as [3, 3], would also be accepted.
```

**Note:**

1. <= A.length <= 100
2. A[i] is a permutation of [1, 2, ..., A.length]


**My Solution** (Kind of Brute Force, but only spend half hour :) )

```js
/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
    var sortArray = [];
    
    //i numbers in A
    for(var i = 0; i < A.length; i++){
        //find largest number in array
        var n = 0;
        var largeNum = A.length - i;
        while(A[n] < largeNum){ n++; }
        //reverse twice
        for(var m = 0; m < n/2; m++){
            var b = A[m];
            A[m] = A[n - m];
            A[n - m] = b;
        }
        for(var m = 0; m < largeNum/2; m++){
            var b = A[m];
            A[m] = A[largeNum - 1 - m];
            A[largeNum - 1 - m] = b;
        }
        sortArray.push(n + 1);
        sortArray.push(largeNum);
    }
    return sortArray;
};
```