---
title: 'DOM Scripting: Reading Note 1'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
toc: true
categories:
- Javascript
- Books
---

> This is the note of book: *<< DOM Scripting
> Web Design with JavaScript and the Document Object Model
> Second Edition >>"*

# Chapter 1 Brief History

## Compare HTML vs XHTML
[](https://hackr.io/blog/difference-between-html-html5-xhtml)
1. HTML4 vs XHTML:  XHTML is stricter version of HTML4;
2. HTML4 allow some elements omit the end tag;
3. HTML4 allow overlapping the certain elements;

1. HTML5 vs XHTML: largely same;
2. XHTML is case sensetive, HTML5 is not;
3. HTML5 compatiable all browsers, but XHTML not;
4. HTML5 is better suit mobile but XHTML is better suit computer screen;

# Chapter 2 JavaScript Syntax

## Three way to add JS 

1.Within <head></head>;

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script></script>
</head>
<body>
  
</body>
</html>
```

2.Better way, place js in seperate file;

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
   <script src="file.js"></script>
</head>
<body>
  
</body>
</html>
```

3.Best way, place end of the document, let browser load faster

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  Mark-up goes here...
<script src="file.js"></script>
</body>
</html>
```

The `<script>` tag is unnecessery need `type="text/javascript"` attribute, because it already assume to be JS;<br/>
	
## Programming language vs Interpreted language

**Programming language:** are either interpreted or compiled. Language like C, Java, they need a complier to translate hight-level in to file that can be exectute directly by computer;<br/>

**Interpreted language:** are just need an interpreter, like JS, browser is an interpreter;

## Comment

1. `//` for single line
2. `/*  content  */` for multiple lines
3. `<!- content ->` also can use HTML style comment, but same like `//`, only use for signle line


## Variable
Although declaring variables beforehand isn't require in JS, but it still a good programming practice.<br/>
The most efficient way to declare and assign variable is:
```js
var a = "marcus", b = 26;
```

**Underscore:** `var my_name = "marcus";`
**Camel Case:**`var myName = "marcus";` (more preferred for function and method name as well as object properties;)

## Date Type

JS is a <span style="color: red">weakly typed language</span>, this means that you can change data type of a variable at any stage.
```js
//following statement will illegal in other strong typed language
var age = "twenty";
age =  20;
```

### String: 

String must be enclosed in quotes, can use either single quotes or double quotes;
```js
//fllowing statement is same
var mood = 'happy';
var mood = "happy";

//but you have do this way in those situation 
var mood = "I'm happy";
var mood = ' he said: "very happy" ';

//there is another way, using  \'
var mood = ' I\'m happy ';
var mood = " he said: \"very happy\" ";
```

### Number:

Allows specify as many decimal places as you want, there are called floating-point numbers;

### Boolean values:

````js
var test = true;
````

### Arrays

```js
//one
var myArray = Array();

//two
var myArray = Array(4);
myArray[0] = "Mark";

//three
var myArray = Array("Mark", "Thon", "Bob");

//four
var myArray = ["Mark", "Thon", "Bob"];

//five: different type of elements
var myArray = ["Mar", 23, false];

//six: array as element
var myArray = ["Mark", "Thon", "Bob"];
var newArray = [ myArray, "test", 23, false];
alert(newArray[0][0]); // "Mark"
```

### Associative arrays

The index can be string instead(<span style="color: red">not recommend</span>), because when you create associative arrays, you're actually add new attributes on the Array object: name, age and living. Ideally, we shouldn't modify the attribute of Array object. 
	
```js
var lennon = Array(); 
lennon["name"] = "John";
lennon["year"] = 1940; 
lennon["living"] = false;
```
	
### Objects

Object is a group of multiple values under the same name, each one of these values is a property of the object. <br/>

Object let people reference elements by name instead of number, make more readable scripts;

```js
//one
var lennon = Object(); 
lennon.name = "John"; 
lennon.year = 1940;
lennon.living = false;

//two
var lennon = { name:"John", year:1940, living:false };

//optimize: Array six above
var lennon = { name:"John", year:1940, living:false };
var newArray = [ lennon, "test", 23, false];
alert(newArray[0].name); // "John"

//improve
var lennon = { name:"John", year:1940, living:false };
var people = {};
var people.manager = lennon;
```

## Operations
To avoid ambiguity, it's best to sperate operations by enclosing them in <span style="color:red">parentheses</span>;
```js
1 + ( 4 * 5);
(1 + 4) * 5;

//string + number =  return string
var a = "happy" + 2000; // "happy2000"
```

## Conditional statements

== equality operater is not strict, for example:

```js
var a = false;
var b = "";
return a == b; // will return ture

//other case
 var a = "1";
 var b = 1;
 return a == b;// also return ture
```

**WHY?**: The "empty string" have the same meaning as "false"; so we need use "==="

## Loop statements
**do...while**
```js
//let statements a least execute once
do{
	statements;
}while(condition);
```

## Functions
Using if you want to reuse the same piece of code more than once; <br/>
When data is passed to a function, it is known as an <span style="color:red">argument</span>.

```js
function convertToCelsius(temp) {
	var result = temp - 32;
	result = result / 1.8;
	return result;
}
var temp_fahrenheit = 95;
var temp_celsius = convertToCelsius(temp_fahrenheit);
alert(temp_celsius);
```
For easily distinguish between variables and functions, <span style="color:red">Variables</span> using <span style="color:blue">underscores</span> to sperate words. <span style="color:red">Functions</span> using <span style="color:blue">camel case</span>.

## Variable Scope
[](https://limarcus.github.io/blog/javascript-var-let-const/)

## Obejcts
Cotain two forms:  <span style="color:red">properties</span> and <span style="color:red">methods</span>; <br/>
To use a <span style="color:red">object Person</span> to describe a specific person, need create <span style="color:blue">an instance of Person</span>
```js
//create new instance called Frank
var Frank = new Person();
```

## Native objects
> Premade objects in JS, `var newArray = new Array();`;

## Host objects
>Objects are supplied by the web browser, like *Form, Image* and *Element*.
>We use <span style="color: red">document object </span>instead those