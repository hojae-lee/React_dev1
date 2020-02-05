import React, { Component } from 'react';

class App extends Component{
  render() {
    const style = {
      backgroundColor: "black",
      padding: "16px",
      color: "white",
      fontSize: "12px"
    };

    return (
      <div style={style}>
        hi 나는 리액트야
      </div>
    );
  }
}


export default App;
