// Core
import React, { Component } from 'react'

export default class Book extends Component {

  render() {
    const { context, authors, title, cover, shelf, select, id, onUpdateShelf } = this.props
    let toShelf

    if (context === 'search') {
      shelf.forEach((b) => {
        if (b.id === id && b.shelf !== undefined) {
          toShelf = b.shelf
        }
      })
    } else {
      toShelf = select
    }
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover">
            
              { cover !== undefined ?
                <img src={ cover.thumbnail }
                     alt={ title + ' cover' } />
                :
                <img src='https://dummyimage.com/138x203/b3b3b3/ffffff.png&text=not+available'
                     alt={ title + ' cover' } />
              }

            </div>

            <div className="book-shelf-changer">
              <select defaultValue={ toShelf !== undefined ? toShelf : 'none' } onChange={ (e) => onUpdateShelf(id, e.target.value) } >
                <option disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>

          </div>

          { title !== undefined && (
            <div className="book-title">
              { title }
              { toShelf !== undefined && context === 'search' && (
                <span className='book-checkmark'>
                  
                </span>
              )}
            </div>
          )}

          { authors !== undefined &&
            authors.map((athor) => (
              <div key={ athor } className="book-authors">{ athor }</div>
            ))
          }

        </div>
      </li>
    )
  }
}
