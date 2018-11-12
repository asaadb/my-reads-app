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
  //get all the books on the shelfs from the books API
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      //console.log(books);
      this.setState({ books });
    });
  }
  //update shelf of the book
  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {console.log('books are updated')});
    const newBookState = this.state.books.map(item => {
      // console.log('book id', book.id)
      // console.log('item id', item.id)
      if(item.id === book.id) {
        // console.log('this is the match', item)
        item.shelf = shelf;
      }
      return item
    })
    this.setState({
      books: newBookState
    })
    console.log('this is the new list', newBookState)
  }
  render() {

    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => <Main books={this.state.books} onChangeShelf={this.changeBookShelf} />}
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
