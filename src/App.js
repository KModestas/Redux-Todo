import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import List from './components/List';
import ResetList from './components/ResetList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <ResetList />
        <List />
      </div>
    );
  }
}

export default App;
