---
title: LeetCode:695. Max Area of Island
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

Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

**Example:**

```js
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
```
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.<br/>
**Example 2:**
```js
[[0,0,0,0,0,0,0,0]]
```
Given the above grid, return 0.<br/>
**Note:**  The length of each dimension in the given grid does not exceed 50.


**My Solution: (iterative breath-first search) (76 ms, faster than 78%)**
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

  var maxArea = 0;

  for (var a = 0; a < grid.length; a++) {
    for (var b = 0; b < grid[a].length; b++) {

      //check if == 1;
      if (grid[a][b] === 1) {
        //is island, check max area

        //create a queue to do breadth-first search
        var myQueue = [[a, b]];
        // set to 0
        grid[a][b] = 0;
        //record how many elements existed in queue
        var num = 0;

        while (myQueue.length > 0) {
          num++;
          //four direction
          var head = myQueue.shift();

          //top
          if ((head[0] - 1) >= 0 && grid[head[0] - 1][head[1]] === 1) {
            //find island, add in queue tail
            myQueue.push([head[0] - 1, head[1]]);
            //set to zero, incase to add multiple times
            grid[head[0] - 1][head[1]] = 0;
          }

          //bottom
          if ((head[0] + 1) < grid.length && grid[head[0] + 1][head[1]] === 1) {
            //find island, add in queue tail
            myQueue.push([head[0] + 1, head[1]]);
            grid[head[0] + 1][head[1]] = 0;
          }

          //left
          if ((head[1] - 1) >= 0 && grid[head[0]][head[1] - 1] === 1) {
            //find island, add in queue tail
            myQueue.push([head[0], head[1] - 1]);
            grid[head[0]][head[1] - 1] = 0;
          }

          //right
          if ((head[1] + 1) < grid[a].length && grid[head[0]][head[1] + 1] === 1) {
            //find island, add in queue tail
            myQueue.push([head[0], head[1] + 1]);
            grid[head[0]][head[1] + 1] = 0;
          }
        }
        //compare maxArea and num
        maxArea = num > maxArea ? num : maxArea;
      }
    }
  }

  return maxArea;
};

```

**Check other solution and use recursive: depth-first search (84 ms, faster than 46%)**

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

  var maxArea = 0;
  for (var a = 0; a < grid.length; a++) {
    for (var b = 0; b < grid[a].length; b++) {
        if(grid[a][b] === 1) 
            maxArea = Math.max(maxArea, islandArea(a, b, grid));
      }
    }
  return maxArea;
};

var islandArea = function( x, y, grid){
    if(x < 0 || x >= grid.length ||
       y < 0 || y >= grid[0].length ||
       grid[x][y] === 0){
        return 0;
       }
    //else
    grid[x][y] = 0;
    return 1+ islandArea(x - 1, y, grid) + islandArea(x + 1, y, grid) +
        islandArea(x, y -1, grid) + islandArea(x, y + 1, grid);
}
```