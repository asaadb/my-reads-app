
import React, { Component } from "react";

class Book extends Component {

  render() {
    const book = this.props.book;
    console.log('book props',this.props.book);
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:`url(${book.imageLinks.thumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={(event) => this.props.updateBook(book, event.target.value)}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors && (
          <div className="book-authors">{book.authors[0]}</div>
        )}

      </div>
    );
  }
}

export default Book
