---
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
title: 'Java: StringBuilder'
---

<span style = "color : red">StringBuilder: A mutable sequence of characters</span>
```java
StringBuilder sb = new StringBuilder();

//append()
sb.append("A");
System.out.println("String = " + sb.toString()); // "String = Agree with you" (length: 14)

//length()
//Returns the length (character count).

//setLength(int newLength)
//Sets the length of the character sequence.

//capacity
// The init capacity is 16
System.out.println("Capacity = " + sb.capacity()); // "Capacity = 16 + 14"

//charAt
System.out.println("Char at 0 =" + sb.charAt(0)); // "Char at 0 = A"

//delete(int start, int end)
//start: beginning index, inclusive
//end: ending index, exclusive

//deleteCharAt(int index)

//getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)
//Characters are copied from this sequence into the destination character array dst.
// get char from index 0 to 7 
// and store in array start index 0 
char[] array = new char[7]; 
sb.getChars(0, 7, array, 0); 

//indexOf(String str)
//Returns the index within this string of the first occurrence of the specified substring.
//	indexOf(String str, int fromIndex)
//Returns the index within this string of the first occurrence of the specified substring, starting at the specified index.

//insert(int offset, ...)
StringBuilder str = new StringBuilder("tutorials website");
str.insert(9, "point"); // "tutorialspoint website"

//lastIndexOf(String str)
//Returns the index within this string of the rightmost occurrence of the specified substring.
//lastIndexOf(String str, int fromIndex)
//Returns the index within this string of the last occurrence of the specified substring.

//replace(int start, int end, String str)
//Replaces the characters in a substring of this sequence with characters in the specified String.

//reverse()
//Causes this character sequence to be replaced by the reverse of the sequence.

//setCharAt(int index, char ch)
//The character at the specified index is set to ch.

//subSequence(int start, int end)
//Returns a new character sequence that is a subsequence of this sequence.

//substring(int start)
//Returns a new String that contains a subsequence of characters currently contained in this character sequence.

//substring(int start, int end)
//Returns a new String that contains a subsequence of characters currently contained in this sequence.

//toString()
//Returns a string representing the data in this sequence.

//trimToSize()
//Attempts to reduce storage used for the character sequence.
```