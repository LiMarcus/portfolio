---
title: Ruby update and Bundler error
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- Ruby
---

**Update Ruby**

```
$ ruby -v
$ curl -L https://get.rvm.io | bash -s stable
To start using RVM you need to run:  `$ source /Users/feng/.rvm/scripts/rvm`
$ rvm install ruby-[version] or rvm install ruby-2.4.1
$ rvm use ruby-2.4.1
or set as deafult:$ rvm --default use 2.4.1
```

**Error:**
```
You must use Bundler 2 or greater with this lockfile.
```
**Fix**
```
$ gem install bundler
$ bundle install
```