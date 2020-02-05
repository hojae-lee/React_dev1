import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={App1}/>
          <Route exact path="/App1" component={App1}/>
          <Route exact path="/App2" component={App2}/>
          <Route exact path="/App3" component={App3}/>
          <Route exact path="/App4" component={App4}/>
        </div>
      </Router>
    );
  }
}

export default App;


/*
React(리엑트)란?
리액트는 페이스북에서 제공해주는 프론트엔드 라이브러리이다.
리액트는 컴포넌트 기반으로 되어 있어서 컴포넌트에 데이터를 내려주면 개발자가 설계한 대로 UI가 만들어져 사용자에게 보여진다.
컴포넌트란 소프트웨어 모듈들로 써 직접 구현 되고 배포 될 수 있어야하는 것들이다.
그래서 리액트에서는 컴포넌트를 사용하여 다른 화면에서도 재사용을 할 수 있어 효율적인 코드가 만들어진다.

리액트는 Virtual DOM(가상돔)을 사용하고 있고 실제 DOM에 적용 시키기 전 가상의 DOM을 만들어 적용 후 최종 결과물에 실제 DOM으로 전달하는 것이다. 가상 DOM은 렌더링이 되지 않기 때문에 연산의 비용이 적고 이러한 모든 변화를 가상 DOM에서 해결 후 실제 DOM에 전달한다. 리액트는 단방향 바인딩이 특징이고 state를 통해 부모의 데이터를 바꿔 줄 수 있다.

간단하게 리엑트를 깔짝 사용해보자.

React시작
npm install -g create-react-app 
create-react-app은 React 프로젝트를 쉽게 시작할 수 있도록 필요한 설정을 해주는 도구이다.

create-react-app 프로젝트명
간단한 React 앱이 만들어 짐.

yarn start 를 하면 실행 할 수 있다. 가장 기본 리엑트 페이지가 나옴.
*/