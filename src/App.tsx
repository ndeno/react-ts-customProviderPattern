import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoProvider} from './context/TodoContext'; 
import {TodoList} from './components/TodoList'; 
import {AddTodo} from './components/AddTodo'; 

const App = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <TodoProvider>
        <AddTodo/>
        <TodoList/>
      </TodoProvider>
    </header>
  </div>
); 

export default App;
