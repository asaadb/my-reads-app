import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import Shelf from '../Shelf'

//this component displays the main page with all the shelfs
class Main extends Component {
  render() {
    const {books} = this.props;
    //console.log(this.props);
    return(
      <div>
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Shelf books={books}/>
      </div>
    )
  }
}
export default Main
