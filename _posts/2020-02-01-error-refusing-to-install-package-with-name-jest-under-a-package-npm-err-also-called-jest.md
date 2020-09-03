---
title: 'Error: Refusing to install package with name "jest" under a package also called
  "jest".'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

Today, I want to create a jest example and simply name folder name as "jest" which made error in next step:
```
npm init -y
```
This commond will create a package have the same name "jest" as folder name;<br/>
![package]({{ site.url }}{{ site.baseurl }}/assets/images/2020-02-01_npm_package.PNG)
When we go to the next step:
```
npm i -D jest
```
Show following error message: `Refusing to install package with name "jest" under a package also called "jest". Did you name your project the same as the dependency you're installing?`
![error]({{ site.url }}{{ site.baseurl }}/assets/images/2020-02-01_npm_error.PNG)

**Solution** <br/>
Rename folder name and delete old `package.json`, run `npm init -y` again