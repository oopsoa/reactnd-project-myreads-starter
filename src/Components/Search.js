// Core
import React from 'react'

// 3rd party Libs
import { Link } from 'react-router-dom'

// Components
import Book from './Book.js'

const Search = function(props){
    return (
      <div className="search-books">

        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={ (e) => props.onSearch(e.target.value) }
              type="text"
              placeholder="Search by title or author"/>
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            { props.books !== undefined &&
                props.books.map((book) => (
                <Book
                  context='search'
                  authors={ book.authors }
                  title={ book.title }
                  cover={ book.imageLinks }
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
  
export default Search
