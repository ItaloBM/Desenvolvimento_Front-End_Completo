import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld(){
  return <div><Hello/></div>
}

function Hello(){
  let isBR = true;
  return <span>
    {isBR ? 'Olá' : 'Hello'}
  </span>
}

function World(){
  return <span>World</span>
}

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('root')
);