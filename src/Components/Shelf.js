// Core
import React, { Component } from 'react'

// Components
import Book from './Book.js'

//export default class Shelf extends Component {

const Shelf = function(props){
 // render() {
   // const { shelfName, books, ctxFilter, onUpdateShelf,  shelf } = this.props

    let theseBooks = props.books.filter((book) => book.shelf === props.ctxFilter)

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ props.shelfName }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { theseBooks.length === 0 ?
              <div className="no-books">
                { 
                  'There are no books in this Shelf.'
                }
              </div>
              :
              theseBooks.map((book) => (
              <Book
                context='list'
                authors={ book.authors }
                title={ book.title }
                cover={ book.imageLinks }
                select={ book.shelf }
                shelf={ props.shelf }
                id={ book.id }
                onUpdateShelf={ props.onUpdateShelf }
                key={ book.id } />
            ))}
          </ol>
        </div>
      </div>
    )
  }
//}

export default Shelf