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
    //const query = this.state.query;
    const searchResults = this.state.bookResults;
    //loop over the books from the search results to check if they have a shelf peoperty,
    //if they do not belong in a shelf, set their shelf prop to 'none'
    let showingBooks = searchResults.map(book =>{
      if(!book.shelf) {
        book.shelf ='none';
      }
      return book;
    });

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
                <Book book={book} updateBook={this.props.onChangeShelf} currentShelf={book.shelf}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
