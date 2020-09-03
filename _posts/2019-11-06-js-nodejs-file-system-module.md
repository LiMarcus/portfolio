---
title: 'JS: Node.js File System Module'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
toc: true
categories:
- Javascript
- Node
---

## Add File System Module:
```js
var fs = require('fs');
```

## Read File
```js
s.readFile()
```
Example:
```
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
```

## Create Files

<span style="color: red">fs.appendFile()</span><br/>
The fs.appendFile() method <span style="color: blue">appends</span> specified content at the <span style="color: blue">end </span>of a file. If the file does not exist, the file will be created:<br/>
Example:
```js
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

<span style="color: red">fs.open()</span><br/>
The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created: <br/>
Example:
```js
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
```

<span style="color: red">fs.writeFile()</span><br/>
The fs.writeFile() method <span style="color: blue">replaces</span> the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:<br/>
Example:
```js
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

## Update Files

<span style="color: red">fs.appendFile()</span><br/>
<span style="color: red">fs.writeFile()</span><br/>

**Delete Files**

<span style="color: red">fs.unlink()</span><br/>
Example:
```js
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
```

## Rename Files

<span style="color: red">fs.rename()</span><br/>
```js
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
```

## Upload Files

<span style="color: red">var formidable = require('formidable');</span><br/>
Exapmle:
```js
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    //upload file
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
      //move file to current folder
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        //file palce on a temppory folder if without fs.rename()
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    //create upload form
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
```
[Resource](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)