import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import List from './components/List';
import ResetList from './components/ResetList';
import Heading from './components/Heading';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <TodoForm />
        <ResetList />
        <List />
      </div>
    );
  }
}

export default App;
