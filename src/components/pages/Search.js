import React, { Component } from "react";
import Book from "../Book";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
<<<<<<< HEAD
/* SortBy helps us to sort by a specific property in an array of objects */
=======
/*SortBy helps us to sort by a specific property in an array of objects*/
>>>>>>> 7aece674f1bfb34aa7c871d1c7a0385c6a42a63b
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
<<<<<<< HEAD
  /*
   * SearchForBook method takes the search query and make an API call to
   * to get the list of books that matches the search
=======
  /* SearchForBook method takes the search query and make an API call to
   *  to get the list of books that matches the search
>>>>>>> 7aece674f1bfb34aa7c871d1c7a0385c6a42a63b
   */
  searchForBook() {
    BooksAPI.search(this.state.query)
      .then(books => {
<<<<<<< HEAD
        /*
         * If the search dosen't match anything, return an empty list
=======
        /* If the search dosen't match anything, return an empty list
>>>>>>> 7aece674f1bfb34aa7c871d1c7a0385c6a42a63b
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
<<<<<<< HEAD
    /*
     * Map over the search result and check if  a book is alreadly added
     * to one of the shelfs. if not, give it a property pf shelf with a value
     * of none
     */

=======
    /* Map over the search result and check if  a book is alreadly added
     * to one of the shelfs. if not, give it a property pf shelf with a value
     * of none
     */
>>>>>>> 7aece674f1bfb34aa7c871d1c7a0385c6a42a63b
    let showingBooks = searchResults.map(book => {
      if (!book.shelf) {
        book.shelf = "none";
      }
      return book;
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
