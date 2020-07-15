import React from 'react';
import logo from './assets/image/logo.png';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <AddTodo />
        <TodoList />
    </div>
  );
}

export default App;