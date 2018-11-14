import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import Main from "./components/pages/Main";
import Search from "./components/pages/Search";

class App extends Component {
  state = {
    books: []
  };
  /* Get all the books on the shelfs from the books API */
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }
<<<<<<< HEAD
  /*
   * ChangeBookShelf method takes two parameters: the book to be updated and the shelf
=======
  /* changeBookShelf method takes two parameters: the book to be updated and the shelf
>>>>>>> 7aece674f1bfb34aa7c871d1c7a0385c6a42a63b
   * then updates the book's in the backend and locally
   */
  changeBookShelf = (book, shelf) => {
    let newBookState;
    /* Update the books in the API */
    BooksAPI.update(book, shelf).then(() => {
      console.log("books are updated");
    });
    /* Check if the book already exists in the list of books, if not, add it */
    if (this.state.books.filter(e => e.id === book.id).length === 0) {
      newBookState = this.state.books.push(book);
    }
    newBookState = this.state.books.map(item => {
      if (item.id === book.id) {
        item.shelf = shelf;
      }
      return item;
    });
<<<<<<< HEAD
    /* Set the book state to the new books */
=======
    /* set the book state to the new books */
>>>>>>> 7aece674f1bfb34aa7c871d1c7a0385c6a42a63b
    this.setState({
      books: newBookState
    });
  };
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <Main
              books={this.state.books}
              onChangeShelf={this.changeBookShelf}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <Search
              books={this.state.books}
              onChangeShelf={this.changeBookShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
