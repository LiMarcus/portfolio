---
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
title: 'LeetCode: 1299. Replace Elements with Greatest Element on Right Side'
---

Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

<br/>

**Example 1:**

```java
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
```

**My answer:**

```java
class Solution {
    public int[] replaceElements(int[] arr) {
        int ge = arr[arr.length - 1];
        arr[arr.length - 1] = -1;
        for(int i = arr.length - 2; i >= 0; i--){
            int temp = ge;
            if( arr[i] > ge) ge = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
}
```


**Perfect space save**


```java
class Solution {
    public int[] replaceElements(int[] arr) {
        for(int i = arr.length - 1,  mx = -1; i >= 0; i--){
            mx = Math.max(arr[i], arr[i] = mx);
        }
        return arr;
    }
}
```

**Conclusion:** <br/>

Using Math.max() method to save the space of temp variable.  mx = Math.max(arr[i], arr[i] = mx);