import React, { Component } from "react";
import Book from "../Book";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
/* SortBy helps us to sort by a specific property in an array of objects */
import sortBy from "sort-by";

class Search extends Component {
  state = {
    query: "",
    bookResults: [],
    books: []
  };
  updateQuery = query => {
    this.setState({ query: query.trim() }, this.searchForBook);
  };
  /*
   * SearchForBook method takes the search query and make an API call to
   * to get the list of books that matches the search
   */
  searchForBook() {
    BooksAPI.search(this.state.query)
      .then(books => {
        /*
         * If the search dosen't match anything, return an empty list
         * otherwise return the list of books
         */
        if (books.error) {
          return this.setState({ bookResults: [] });
        } else {
          return this.setState({ bookResults: books });
        }
      })
      .catch(() => {
        return this.setState({ bookResults: [] });
      });
  }

  render() {
    const searchResults = this.state.bookResults;
    const shelfBooks = this.props.books;
    /*
     * Map over the search result and check if  a book is alreadly added
     * to one of the shelves. if not, give it a property of shelf with a value
     * of none
     */
     console.log(searchResults);
    let showingBooks = searchResults.map(searchBook => {
      shelfBooks.forEach(shelfBook => {
        if (searchBook.id === shelfBook.id) {
          searchBook.shelf = shelfBook.shelf;
        }
      });
      if (!searchBook.shelf) {
        searchBook.shelf = "none";
      }
      return searchBook;
    });
    /* sort books alphabetically */
    showingBooks.sort(sortBy("title"));
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/*
        Mapping over the books in the showingBooks array and passing each book
        to the Book component
        */}
            {showingBooks.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  updateBook={this.props.onChangeShelf}
                  currentShelf={book.shelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
