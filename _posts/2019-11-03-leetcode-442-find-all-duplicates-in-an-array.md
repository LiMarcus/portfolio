---
title: 'LeetCode: 442. Find All Duplicates in an Array'
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

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear **twice** and others appear **once**.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

**Example:**

```
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
```

**My solution:** I forgot max repeat number is twice , and n > 0, n<= index

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    //use Map
    let myMap = new Map();
    for(let i = 0; i< nums.length; i++){
        if(myMap.has(nums[i])){
            let n = myMap.get(nums[i]);
            myMap.set(nums[i], ++n);
           }else{
               myMap.set(nums[i], 1);
           }
    }

    let newArray = [];
    let myIterator = myMap.entries();
    let result = myIterator.next();
    while(!result.done){
          if(result.value[1] == 2){
                newArray.push(result.value[0]);
             }
             result = myIterator.next();
          }
    return newArray;
};
```

Thanks "YuxinCao"<br/>
**new Solution:**
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let newArray = [];
    for(let i = 0; i < nums.length; i++ ){
        //1. use -nums[number] mark number appear
        //max repeat is twice, and number > 0
        //so don't worry - make confusion
        //2. number <= array.length + 1, so index need -1
        if(nums[Math.abs(nums[i]) - 1]< 0){
           newArray.push(Math.abs(nums[i]));
           }else{
               nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1];
           }
    }
    return newArray;
};
```