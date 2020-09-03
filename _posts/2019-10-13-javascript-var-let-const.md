---
title: 'JavaScript: var, let, const'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
Categroies:
- Javascript
Tags:
- Var
- Let
- Const
---

**Var**: 

1. If we declare var inside the function, it is function scoped;
2. If we declare var not in the function, it is global scoped;

```javascript
//if your code is
console.log(a) // undifined
var a;

//will interpreted as
var a;
console.log(a) // undifined

//for let or const, it will show Reference error
```

3.There is another way to make var **private**:

```js
//this function will run immediately, dont need invocation
(function(){
	var a = 'heyy';
	console.log(a):
})();
//this console.log will make 'a is not defined' error,
console.log(a);
```


**Let**: 

1. Let is block scope;
2. Javascript recognize the {} as the scope delimiter;


**Const**:

1. Const is block scoped;
2. Can't be reassigned, but can be mutated;
3. Mutated:

```javascript
{
 const a = [1,2,3];
 const b = {name: "hello"};
 a.push(4,5);     //mutating the value of constant "a"
 b.name="World";  //mutating the value of constant "b"
 
 console.log(a); //this will show [1,2,3,4,5]
 console.log(b); //this will show {name: "World"}
 
}
```

4. Re-assigned:

```javascript
{
 const name = "Mike";
 const PI = 3.14; 
 const a = [1,2,3];
 const b = {name: "hello"};
 
 name="Joe"; 
//this will throw an error, since we are attempting to re-assign "name" to a different value.
 PI = PI + 1; 
//this will throw an error, since we are attempting to re-assign PI to a different value.
 a = [1,2,3,4,5];
//this will throw an error, since we are attempting to re-assign "a" to a different value.
 b = {name: "hello"};
//this will throw an error, since we are attempting to re-assign "b" to a different value.
}
```

**Why chose "let" instead of "var"?**

1. Avoid to define global variables, global variable can be modify from anywhere;