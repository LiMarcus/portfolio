---
title: 'Java: Reverse String'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

There are many ways to reverse string, I list two solutions that are not that normal: <br/>

**1:**

```java
// Java program to Reverse a String using ListIterator 
import java.lang.*; 
import java.io.*; 
import java.util.*; 
  
// Class of ReverseString 
class ReverseString 
{ 
    public static void main(String[] args) 
    { 
        String input = "Geeks For Geeks"; 
        char[] hello = input.toCharArray(); 
        List<Character> trial1 = new ArrayList<>(); 
  
        for (char c: hello) 
            trial1.add(c); 
  
        Collections.reverse(trial1); 
        ListIterator li = trial1.listIterator(); 
        while (li.hasNext()) 
            System.out.print(li.next()); 
    } 
} 
```

**2:**

```java
// Java program to ReverseString using StringBuilder 
import java.lang.*; 
import java.io.*; 
import java.util.*; 
  
// Class of ReverseString 
class ReverseString 
{ 
    public static void main(String[] args) 
    { 
        String input = "Geeks for Geeks"; 
  
        StringBuilder input1 = new StringBuilder(); 
  
        // append a string into StringBuilder input1 
        input1.append(input); 
  
        // reverse StringBuilder input1 
        input1 = input1.reverse(); 
  
        // print reversed String 
        System.out.println(input1); 
    } 
} 
```