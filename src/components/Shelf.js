import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
<<<<<<< HEAD
  /*
   * Here, we are rendering the shelfs. We are filtering the books
=======
  /* Here, we are rendering the shelfs. We are filtering the books
>>>>>>> 7aece674f1bfb34aa7c871d1c7a0385c6a42a63b
   * and render them based of their shelf prop. We pass the book to
   * the Book component along with its shelf prop and the updateBook
   * function
   */
  render() {
    const books = this.props.books;
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
<<<<<<< HEAD
            {/*
          We are looping over the list books here and filtering them
          based on their shelf prop
          */}
=======
>>>>>>> 7aece674f1bfb34aa7c871d1c7a0385c6a42a63b
              {books
                .filter(book => book.shelf === "currentlyReading")
                .map(currBook => (
                  <li key={currBook.id}>
                    <Book
                      book={currBook}
                      updateBook={this.props.updateBookShelf}
                      currentShelf={currBook.shelf}
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter(book => book.shelf === "wantToRead")
                .map(currBook => (
                  <li key={currBook.id}>
                    <Book
                      book={currBook}
                      updateBook={this.props.updateBookShelf}
                      currentShelf={currBook.shelf}
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter(book => book.shelf === "read")
                .map(currBook => (
                  <li key={currBook.id}>
                    <Book
                      book={currBook}
                      updateBook={this.props.updateBookShelf}
                      currentShelf={currBook.shelf}
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default Shelf;
