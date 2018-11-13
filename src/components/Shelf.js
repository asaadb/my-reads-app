import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {

  render() {
    const books = this.props.books;
      console.log('books in the shelf',books);
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.filter(book => (
                book.shelf === 'currentlyReading'
              )).map(currBook => (
                <li key={currBook.id}>
                <Book book={currBook} updateBook={this.props.updateBookShelf} currentShelf={currBook.shelf}/>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {books.filter(book => (
              book.shelf === 'wantToRead'
            )).map(currBook => (
              <li key={currBook.id}>
              <Book book={currBook} updateBook={this.props.updateBookShelf} currentShelf={currBook.shelf} />
              </li>
            ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {books.filter(book => (
              book.shelf === 'read'
            )).map(currBook => (
              <li key={currBook.id}>
              <Book book={currBook} updateBook={this.props.updateBookShelf} currentShelf={currBook.shelf}/>
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
