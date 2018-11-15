import React from "react";
import Shelf from "../Shelf";
import { Link } from "react-router-dom";

/* this component displays the main page with all the shelves */
const Main = props => {
  const books = props.books;
  return (
    <div>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <Shelf books={books} updateBookShelf={props.onChangeShelf} />
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Main;
