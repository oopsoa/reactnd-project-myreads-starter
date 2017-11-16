// Core
import React from 'react'

const Book = function(props){
    let toShelf

    if (props.context === 'search') {
      props.shelf.forEach((b) => {
        if (b.id === props.id && b.shelf !== undefined) {
          toShelf = b.shelf
        }
      })
    } else {
      toShelf = props.select
    }
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover">
            
              { props.cover !== undefined ?
                <img src={ props.cover.thumbnail }
                     alt={ props.title + ' cover' } />
                :
                <img src='https://dummyimage.com/138x203/b3b3b3/ffffff.png&text=not+available'
                     alt={ props.title + ' cover' } />
              }

            </div>

            <div className="book-shelf-changer">
              <select defaultValue={ toShelf !== undefined ? toShelf : 'none' } onChange={ (e) => props.onUpdateShelf(props.id, e.target.value) } >
                <option disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>

          </div>

          { props.title !== undefined && (
            <div className="book-title">
              { props.title }
              { props.toShelf !== undefined && props.context === 'search' && (
                <span className='book-checkmark'>
                  
                </span>
              )}
            </div>
          )}

          { props.authors !== undefined &&
            props.authors.map((author) => (
              <div key={ author } className="book-authors">{ author }</div>
            ))
          }

        </div>
      </li>
    )
  }

export default Book
