import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import './App.css';
import Main from './components/pages/Main'
import Search from './components/pages/Search'

class App extends Component {
  state = {
    books: []
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Main}/>
        <Route exact path="/search" component={Search}/>
      </div>
    );
  }
}

export default App;
