---
title: 'DOM Scripting: Reading Note 2'
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

# Chapter 3 The DOM
## D: Document
## O: Object
1. **User-defined objects**;
2. **Native objects**: like Array, Math and Date;
3. **Host objects**: provided by the borwser;
### Host object:
<span style="color:red">Window</span> object is nothing less than a representation of the browser window itself. It often referred to <span style="color:blue">Browser Object Model</span>. It has method: `window.open` and `window.blur`;<br/>
<span style="color:red">Document</span> object: handle the contents of a web page; 
## M: Model
> Could easily stand for Map, like a city map represent the real city;
> The browser provides a map of the page, we use JavaScript to read this map;

The most important convention used by DOM is the representation of a document as a <span style="color:blue">tree</span>;

![errorImg]({{ site.url }}{{ site.baseurl }}/assets/images/2019-11-12_DOMtree.PNG)

## Nodes
> Used to denote a point of connection in a network, network is a collection of nodes;
> Nodes as the branches and leaves on the document tree;

### Element nodes
> Such as  `<body> <p> and <ul>` , Elements are the basic building blocks of documents on the web;

### Text nodes
> Most web content is provide by text;

### Attribute nodes
> Used to give more specific information about an element;


`<p title="a gentle reminder">Don't forget to buy this stuff.</p>`

![errorImg]({{ site.url }}{{ site.baseurl }}/assets/images/2019-11-12_DOMnode.PNG)

## Cascading Style Sheets
<span style="color:red">Inheritance</span> is a powerful feature of CSS, Like DOM, CSS views the contents of a document as a node tree. Elements that are nested within the node tree will inherit the style properties of their parents;

`Example: declaring front color on <body> will automatically apply all elements style within body`

### class attribute

```html
<p class="special">This paragraph has the special class</p>
<h2 class="special">So does this headline</h2>
```
```css
.special {
font-style: italic;
}
h2.special {
text-transform: uppercase;
}
```

### id attribute

```html
<ul id="purchases">
```
```css
#purchases {
border: 1px solid white;
background-color: #333;
color: #ccc;
padding: 1em;
}
#purchases li {
font-weight: bold;
}
```

## Get Elements

### getElementById
> Allow to get straight to the element node with the specified id;
> Is a function associated with the <span style="color:blue">document</span> object;

In fact, each element in a document is an object. `getElementById` also return an object.

### getElementsByTagName

> If use method `getElementsByTagName`, you access to an <span style="color:blue">array </span> populated with every occurrence of a specified tag;

`document.getElementsByTagName("li")` <br/>

The wildcard will give you the total number of element nodes in a
document: <br/>

`alert(document.getElementsByTagName("*").length);` <br/>

Combine `getElementById` with `getElementsByTagName` 
```js
//find how many elements contained by "purchase" list;
var shopping = document.getElementById("purchases");
var items = shopping.getElementsByTagName("*");
```

### getElementsByClassName

> You can include multiple class name to locate elements that have more than one class,
> The order of the class name doesn't matter;

`document.getElementsByClassName("important sale");`<br/>

Combine `getElementById` with `getElementsByClassName`

```js
var shopping = document.getElementById("purchases");
var sales = shopping.getElementsByClassName("sale");
```

## Getting and Setting Attributes

### getAttribute
> Takes only one argument, would return `null` if there is no value; 
`object.getAttribute(attribute)`

if (something) is a shorthand way of writing if (something != null). The condition of the if
statement will be true if something exists. It will be false if something doesn’t exist.

### setAttribute
> Takes two arguments `object.setAttribute(attribute,value)`;

The real power of the DOM is that the contents of a page can be updated without refreshing the page in the browser.