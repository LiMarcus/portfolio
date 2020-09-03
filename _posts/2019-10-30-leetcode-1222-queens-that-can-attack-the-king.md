---
title: 'LeetCode: 1222. Queens That Can Attack the King'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories: LeetCode
---

On an 8x8 chessboard, there can be multiple Black Queens and one White King.

Given an array of integer coordinates queens that represents the positions of the Black Queens, and a pair of coordinates king that represent the position of the White King, return the coordinates of all the queens (in any order) that can attack the King.

**Example**

```
Input: queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]
Output: [[0,1],[1,0],[3,3]]
Explanation:  
The queen at [0,1] can attack the king cause they're in the same row. 
The queen at [1,0] can attack the king cause they're in the same column. 
The queen at [3,3] can attack the king cause they're in the same diagnal. 
The queen at [0,4] can't attack the king cause it's blocked by the queen at [0,1]. 
The queen at [4,0] can't attack the king cause it's blocked by the queen at [1,0]. 
The queen at [2,4] can't attack the king cause it's not in the same row/column/diagnal as the king.
```

**My solution:**

```js
/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    
    //get king x,y coordinate
    var x = king[0];
    var y = king[1];
    
    //totally 8 directions, index 0 - 7
    var direction = [null, null, null, null,
        null, null, null, null];
    
    //compare
    for( var i = 0; i < queens.length; i++){
                //compare 'top'
        if( queens[i][1] == y && queens[i][0] < x){
            if((direction[0] == null) || (direction[0][0] < queens[i][0])){
               direction[0] = queens[i];
               }
        }
                //compare 'top-right'
        if( (queens[i][1] - y) == ( x - queens[i][0]) && ( (queens[i][1] - y) > 0)){
            if((direction[1] == null) || (direction[1][0] < queens[i][0])){
               direction[1] = queens[i];
               }           
        }
                //compare 'right'
        if( queens[i][0] == x && queens[i][1] > y ){
            if((direction[2] == null) || (direction[2][1] > queens[i][1])){
               direction[2] = queens[i];
               }     
        }
                //compare 'right-bottom'
        if( (queens[i][1] - y) == ( queens[i][0] - x) && ( (queens[i][0] - x) > 0)){
            if((direction[3] == null) || (direction[3][0] > queens[i][0])){
               direction[3] = queens[i];
               }     
        }
                //compare 'bttom'
        if( queens[i][1] == y && queens[i][0] > x){
            if((direction[4] == null)||(direction[4][0] > queens[i][0])){
               direction[4] = queens[i];
               }     
        }
                //compare 'left-bottom'
        if( (  y - queens[i][1] ) == ( queens[i][0] - x ) && ( (y - queens[i][1]) > 0)){
            if((direction[5] == null)||(direction[5][0] > queens[i][0])){
               direction[5] = queens[i];
               } 
        }
                //compare 'left'
        if( queens[i][0] == x && queens[i][1] < y){
            if((direction[6] == null) || (direction[6][1] < queens[i][1])){
               direction[6] = queens[i];
               } 
        }
                //compare 'top-left'
        if( ( y - queens[i][1] ) == ( x - queens[i][0]) && ( (x - queens[i][0]) > 0) ){
            if((direction[7] == null) || (direction[7][1] < queens[i][1])){
               direction[7] = queens[i];
               } 
        } 
    }

    var filtered = direction.filter(function(value, index, arr){
        return value != null;
    });

    return filtered;    
};
```