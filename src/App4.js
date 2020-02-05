import React, { Component } from 'react';
import MyName from './MyName';

//함수형 컴포넌트 첫글자는 대문자로
class App extends Component{
  render() {
    return (
      <MyName name="리액트" />
    );
  }
}


export default App;
