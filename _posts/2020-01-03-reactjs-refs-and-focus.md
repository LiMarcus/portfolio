---
title: 'React.js: Refs and Focus'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

[Refs](https://reactjs.org/docs/refs-and-the-dom.html#when-to-use-refs) <br/>

[Code](https://codesandbox.io/s/festive-fermat-u8yeq)
```js
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.superheroElement = React.createRef();
  }
  handleClick = () => {
    this.superheroElement.current.changeName("shazi");
    // this.superheroElement.current.focus();
  };
  render() {
    return (
      <div className="App">
        <Superhero ref={this.superheroElement} />
        {/* <input ref={this.superheroElement} /> */}
        <button onClick={this.handleClick}>Show real name</button>
      </div>
    );
  }
}

class Superhero extends React.Component {
  state = {
    name: "Batman"
  };
  changeName = e => {
    this.setState({
      name: e
    });
  };
  render() {
    return <input value={this.state.name} />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```