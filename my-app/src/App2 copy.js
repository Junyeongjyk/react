import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Contents from './Contents.js';

function App() {

  let post = '글 제목'
  let [글제목 , b] = useState('남자 여름 옷');

  let num = [1, 2, 3];

  let a = num[0];
  let c = num[1];

  let [ logo, setLogo ] = useState('ReactBlog');

  return (
    <div className="App">
      <div className="black-nav">
        <h2 style={{color : '#fff', fontSize : '2rem'}} id={post}> 블로그임 </h2>
      </div>
      
      <div className="list">
        <h2> { post } </h2>
        <p>6월 17일 발행</p>
        <p>{ a }</p>
        <p>{ b }</p>
        <p>{ c }</p>
      </div>

      <div className="logo">
        { logo }
      </div>

      <Contents/>

    </div>
  );
}

export default App;
