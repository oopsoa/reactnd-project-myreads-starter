// Core
import React, { Component } from 'react'

// 3rd party
import { Route } from 'react-router-dom'

// Components
import Search from './Components/Search.js'
import BookShelves from './Components/ShelfIndex.js'

// NODE API
import * as BooksAPI from './BooksAPI'

// Stylesheets
import './App.css'

export default class BooksApp extends Component {

  state = {
    books: [],
    searchBooks: [],
    loading: true,
    shelfMap: []
  }

  componentDidMount() {
    this.getMyBooks()
  }

  getMyBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books,
        loading: false
      })
      books.map((book) => (
        this.setState(state => {
          state.shelfMap.push({ id: book.id, shelf: book.shelf })
        })
      ))
    })
  }

  updateShelf = (id, shelf) => {
    BooksAPI.update({ id }, shelf).then(() => {
      this.getMyBooks()
    })
  }

  search = (query) => {
    if(query.length !== 0) {
      BooksAPI.search(query).then((searchBooks) => {
        this.setState({ searchBooks })
      })
    } else {
      this.setState({ searchBooks: [] })
    }
  }

  render() {
    const { books, loading, searchBooks, shelfMap } = this.state

    return (
      <div className="app">

        <Route exact path='/search' render={() => (
          <Search
            shelf={ shelfMap }
            books={ searchBooks }
            onSearch={ this.search }
            onUpdateShelf={ this.updateShelf } />
        )} />

        <Route exact path='/' render={() => (
          <BookShelves
            books={ books }
            loading={ loading }
            onUpdateShelf={ this.updateShelf } />
         )} />
      </div>
    )
  }
}
