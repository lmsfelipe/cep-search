import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchCep from './pages/search-cep';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchCep />
      </div>
    );
  }
}

export default App;
