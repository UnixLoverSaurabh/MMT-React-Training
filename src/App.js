import React from 'react';
import logo from './assets/image/logo.png';
import './App.css';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <TaskList />
    </div>
  );
}

export default App;