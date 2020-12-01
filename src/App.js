import React from 'react'; //리액트를 불러와서 사용할 수 있게 해준다 (import 쓸이름 from '불러올 이름')
import logo from './logo.svg'; //웹팩은 모듈 번들러이다 말그대로 팩인데, css, html, js, image등을 모두 모듈로 치는데 그것들의 집합! 웹팩
import './App.css';

function App() {
  var name="제선";
  const style={
    backgroundColor:'black',
    color:'aqua',
    fontSize:'30px',
    fontWeight:'800'
  };
  return (
    <div style={style}>
      <h1>hello {name} how are you</h1>
      {name==="s제선"?(<h1>제선!</h1>):(<h3>틀려써</h3>)}
      <input />
      <Second></Second>
    </div>
  );
}

function Second(){
  return(
    <div>나는 세컨드다</div>
  )
}

export default App;
