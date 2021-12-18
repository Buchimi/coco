import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a header</h1>
        <h2>This is a smalller header </h2>
        <h3>This is an even smaller header </h3>
        <p> This is a paragraph, you can write anything on it </p>
        <p> <strong> This is bolded text </strong></p>
        <p> <em> This is italicized text </em></p>
        <p> This is a link to <a href='https://leetcode.com' style={{color:"white"}}>leetcode</a></p>
        <button> Click me </button>
        <img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F1-BfDBTFLSc%2Fmaxresdefault.jpg&f=1&nofb=1"/>
        <ul>
          <h1> Shopping list</h1>
          <li> cargo pants </li>
          <li> roofies </li>
          <li> steam deck </li>
          <li> RPG </li>
        </ul>
      </header>
    </div>
  );
}

export default App;