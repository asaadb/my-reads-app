import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import { Route } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import Main from "./components/pages/Main";
import Search from "./components/pages/Search";

class App extends Component {
  state = {
    books: []
  };
  //get all the books from the books API
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      //console.log(books);
      this.setState({ books });
    });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => <Main books={this.state.books} />}
        />
        <Route
          exact
          path="/search"
          render={() => <Search books={this.state.books} />}
        />
      </div>
    );
  }
}

export default App;
