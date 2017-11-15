// Core
import React, { Component } from 'react'

// 3rd party
import { Link } from 'react-router-dom'

// Components
import Shelf from './Shelf.js'

export default class BookShelves extends Component {

  render() {
    const { books, onUpdateShelf, loading } = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              books={ books }
              loading={ loading }
              shelfName='Currently Reading'
              ctxFilter='currentlyReading'
              onUpdateShelf={ onUpdateShelf } />
            <Shelf
              books={ books }
              loading={ loading }
              shelfName='Want to Read'
              ctxFilter='wantToRead'
              onUpdateShelf={ onUpdateShelf } />
            <Shelf
              books={ books }
              loading={ loading }
              shelfName='Read'
              ctxFilter='read'
              onUpdateShelf={ onUpdateShelf } />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}
