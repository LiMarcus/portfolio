---
title: 'React: using props to update child components'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

If we just update parents components by `setState()`, it will not effect its child components;
<br/>

I find two ways to solve this problem:<br/>

1. is deprecated: add
 ` componentWillReceiveProps(newProps) {
    this.setState({name: newProps.name});
}`
2. new: add componentDidUpdate()

> componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.

**setState()  in componentDidUpdate() must be wrapped in a condition**



# Notice
I saw offical doc doesn't recommond to use "setState(this.props)", It waste time and always occur with error.<br/>
Actually, we can use `this.props.value` directly in child component <br/>
Then write `handleChange` function in parent, send `handleChange` as part of props to child <br/>
`handleChange` can use `setState({time})` to render and update .<br/>

Example:
```js

//parent

class Example extend React.component {
	state = { time : new Date()}
	handler = ()=>{
		this.setState({time: this.state.time.setHours(1)});
	}
	
	render(){
		return(
		<button onClick={this.handler}>Click</button>
		<Datepicker value= {this.state.time}/> 
		)
	}
}
```
```js
//child
import React, { useState, } from "react";
import DatePicker, { subDays } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class MyDatePicker extends React.Component {
  state = {
    startDate: new Date( this.props.value)
  };
  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({startDate: prevProps.value});
    }
}
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        showTimeSelect
        timeIntervals={60}
        minTime={new Date().setHours(17)}
        maxTime={new Date().setHours(20)}
        excludeDates={[new Date("Mon Aug 04 2019 14:00:00 GMT-0700")]}
        excludeTimes={[
          new Date("Mon Aug 05 2019 14:00:00 GMT-0700")
        ]}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    );
  }
};

export default MyDatePicker;
```