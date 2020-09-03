---
title: 'React.js: add a new function for Datepicker'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

I am using [Datepicker](https://reactdatepicker.com/#example-select-time) in my [website](http://myfreestylecraft.com)<br/>
The **Datepicker** doesn't have function to exclude special times for each day, so I add some code to help it recognize date; <br/>
![preview]({{ site.url }}{{ site.baseurl }}/assets/images/2020-01-03_datepicker1.PNG)
![preview]({{ site.url }}{{ site.baseurl }}/assets/images/2020-01-03_datepicker2.PNG)

(1) Inside child `<Datepicker> ` component :

```js
      <DatePicker
        selected={this.state.startDate}
        //onChange={this.handleChange}
        onChange={this.props.handler}
        showTimeSelect
        timeIntervals={30}
        minDate={new Date()}
        maxDate={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - new Date().getUTCDay() + 14)}
        excludeDates={this.getRestDay(new Date(), 1)}
        minTime={new Date().setHours(12,0)}
        maxTime={new Date().setHours(19, 0)}
        excludeTimes={ this.props.excludeTime}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
```
(2) Inside parent component:

```js
<Datepicker value={this.state.startTime} handler={this.handleStartTimeChange} excludeTime={this.state.eachExcludeTime} />
```
(3) function`handleStartTimeChange`, use to get selected time

```js
  handleStartTimeChange = date => {
    this.setState({
      startTime: date,
      eachExcludeTime: this.getEachExcludeTime(date)
    });
  }
```
(4) When user visit website, it will retrive all unavailable date for MongoDB, I store them in `state.excludeTime`

```js
  getDataFromDb = () => {
    fetch('https://')
      .then((data) => data.json())
      .then((res) => {
        const excludeTimeArray = [];
       //get all unavaliable time
        res.forEach(obj => {
          let a = new Date(obj.start);
          let b = new Date(obj.end);
          let n = ( b.getHours() - a.getHours()) * 2 + ( b.getMinutes() - a.getMinutes()) / 30;
          excludeTimeArray.push(new Date(a));
          for (let x = 0; x < n - 1; x++) {
            a.setHours(a.getHours(), a.getMinutes() + 30, 0);
            // if is same day
            excludeTimeArray.push(new Date(a));
          }
        })
        //set time string to Date object
        this.setState({
          data: res.map(obj => {
            return ({
              start: new Date(obj.start),
              end: new Date(obj.end),
              // change init string to boolean
              init: (obj.init === "true"),
            });
          }),
          excludeTime: excludeTimeArray
        })
      }
      );
  };
```
(5)  function `this.getEachExcludeTime(date)`, this function can be called when user change date in **Datepicker**, it can return unavailable time for each day

```js
  //get each day unavailable time
  getEachExcludeTime(date){
    let newArray = [];
    this.state.excludeTime.forEach( element =>{
      if(element.getDate() == date.getDate()){
        newArray.push(element);
      }
    });
    return newArray;
  }
```