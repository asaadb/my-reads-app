import React, { Component } from "react";
import Book from "../Book";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
//the escapeRegExp to escape any RegExp charactor in the query
import escapeRegExp from "escape-string-regexp";
//sortBy helps us to sort by a specific property in an array of objects
import sortBy from "sort-by";

class Search extends Component {
  state = {
    query: "",
    bookResults: [],
    books:[]
  };
  updateQuery = query => {
    this.setState({ query: (query.trim()) }, this.searchForBook);
  };

  searchForBook () {
    console.log("query search", this.state.query);
    BooksAPI.search(this.state.query).then(books => {
      console.log("books returnd from API search", books);
      if (books.error) {
        return this.setState({ bookResults: [] });
      } else {
        return this.setState({ bookResults: books });
      }
    }).catch(()=> {
      return this.setState({ bookResults: [] });
    });
  };

  render() {
    //const { books } = this.props;
    // console.log('books from search', this.props);
    const query = this.state.query;
    const searchResults = this.state.bookResults;

    let showingBooks = [];
    //create a RegExp and use the escapeRegExp to escape any RegExp charactor in the query
    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      showingBooks = searchResults.filter(
        book => (match.test(book.title) || match.test(book.authors[0]))
      );
    }
    //sort books alphabetically
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
            {showingBooks.map(book => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
