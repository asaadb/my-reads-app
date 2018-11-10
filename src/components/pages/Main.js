import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import Book from '../Book'


class Main extends Component {
  render() {
    return(
      <div>
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Book/>
      </div>
    )
  }
}
export default Main
