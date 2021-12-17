import './App.css';
import React from 'react';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h2 style={{marginLeft: "20px",fontSize: "20px"}}>React_Redux_Todo List</h2>
      <span className="title">Todo List</span> <br />
      <Todo />
    </div>
  );
}

export default App;
