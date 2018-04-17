import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import List from './components/List';
import ResetList from './components/ResetList';
import Heading from './components/Heading';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <AddTodo />
        <ResetList />
        <List />
      </div>
    );
  }
}

export default App;
