import React, { Component } from "react";
import Shelf from "../Shelf";

import { Link } from "react-router-dom";
/* this component displays the main page with all the shelfs */
class Main extends Component {
  render() {
<<<<<<< HEAD
    const books = this.props.books;
=======
    const  books = this.props.books;
>>>>>>> 7aece674f1bfb34aa7c871d1c7a0385c6a42a63b
    return (
      <div>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Shelf books={books} updateBookShelf={this.props.onChangeShelf} />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}
export default Main;
