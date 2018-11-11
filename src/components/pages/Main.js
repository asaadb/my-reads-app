import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import Shelf from '../Shelf'


class Main extends Component {
  render() {
    return(
      <div>
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Shelf/>
      </div>
    )
  }
}
export default Main
