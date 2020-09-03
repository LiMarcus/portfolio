---
title: 'React.js: "setState" undefined'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

I use `setState();` in custom function, but appear error, thanks [Fabien Sa](https://stackoverflow.com/questions/32317154/react-uncaught-typeerror-cannot-read-property-setstate-of-undefined) help me to figure out this problem.

**Solution:** use `()=>` instead of function()

```js
//example
//error
    findComment(){
        let id = this.props.post._id;
        console.log(id);
        this.props.comments.forEach(function(e){
            if(e.id == id){     
                this.setState({
                    singleComment : e.comment,
                    find: true
                });
            }
        });
    }
		
//correct
    findComment(){
        let id = this.props.post._id;
        console.log(id);
        this.props.comments.forEach( (e) =>{
            if(e.id == id){     
                this.setState({
                    singleComment : e.comment,
                    find: true
                });
            }
        });
    }
		
```