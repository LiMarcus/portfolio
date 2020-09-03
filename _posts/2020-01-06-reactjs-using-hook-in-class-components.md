---
title: 'React.js: using Hook in Class components'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

I want to add **React Router** to my existing **Class component**, becasue I need to use nesting function, and there is a **Hook** `useRouteMatch()` I must use in class component; <br/>
In order to add Hook, I created another **Function component**, and put Hook inside function, here is part of the code:

```js
import {
    useRouteMatch,
    Link,
} from "react-router-dom";

class Photo extends React.Component {
 commentHandler(e) {
	e.preventDefault();
	console.log("test");
	this.props.CommentBtnHandler(this.props.post, this.state.singleComment);
 }
 render(){
  return(
	 <CommmentIcon 
	  value = {post} 
		find = {this.state.find} 
		commentLength = {this.state.singleComment.length} 
		onClick = {this.commentHandler} />
	 )
 }
}

function CommmentIcon(props) {
    let { path, url } = useRouteMatch();
    return (
        <div onClick={props.onClick} className = "comment_centre">
            <Link to={`${url}/${props.value.caption}`} className="likes" style={{ paddingTop: 30 }}  >
                    <span className="speech-bubble"></span>&nbsp;
                    {props.find ? props.commentLength : 0}
            </Link>
        </div>
    )

}
```