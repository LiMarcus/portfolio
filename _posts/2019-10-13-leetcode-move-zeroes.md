---
title: 'LeetCode: Move Zeroes'
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
- Move zero
---

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

**Example:**

```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Note:**

1. You must do this in-place without making a copy of the array.
2. Minimize the total number of operations.


**Solutions:**

My first try: <br/>
I create a new array to store index of zero elements,  then swap the smallest index zero with last no-zero element, thats too complicate; If I need a new array, I also can store the no-zero-elements in this new array by order, then copy back to old array. They have same Complexity;

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //index to store zero elements index
    let zeroIndex = [];
    //get every elements from front to end
    nums.forEach(function(element, index){
        //store zero elements to array
        if(element == 0){
           zeroIndex.push(index);
           }
        else{
            if(zeroIndex.length != 0){
                //swap smallest index of zero with nuZero value
                nums[zeroIndex.shift()] = element;
                nums[index] = 0;
                //push new zero element index to array after swap
                //the new element always the largest index, so just push on tail
                zeroIndex.push(index);
            }
            else{
                //no-zero element, and zeroIndex is empty
                //nothing need to do, keep going
            }
        }
    })
};
```

After optimize: <br/>
My first solution is thinking about two pointer, one pointer is for samllest index zero, one pointer for last found no-zero element; but I need to find next zero index after swap, so I create a array;<br/>
But I don't need think about zero, I can make one pointer point next available index for no-zero element, one pointer switch from head to tail. When the second pointer find no-zero value, do the swap;


```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    //the next available index for no zero element to store
    let nextNoZeroIndex = 0;
    
    //get every elements from front to end
    nums.forEach(function(element, index){
        
        //find next no zero element
        if(element != 0){
            
            //swap no-zero value with next available index
            let temp = nums[nextNoZeroIndex];
            nums[nextNoZeroIndex] = element;
            nums[index] = temp;
            
            //move to next available index for no zero element
            nextNoZeroIndex++;
        }
    })
};

```