import React, { Component } from 'react';
import 'bootstrap-css-only';
import TodoForm from './components/TodoForm';
import List from './components/List';
import ResetList from './components/ResetList';
import Heading from './components/Heading';

class App extends Component {
  render() {
    return (
      <main className="App, container">
        <Heading />
        <TodoForm />
        <ResetList />
        <List />
      </main>
    );
  }
}

export default App;
