import React from 'react'
import BookShow from './BookShow'
import { useContext } from 'react'
import BooksContext from '../context/books'

const BookList = () => {
  const { books } = useContext(BooksContext);

  const booksToRender = books.map((book)=> {
    return <BookShow key={book.id} book={book} />
  })
  return (
    <div className='book-list'>
      {booksToRender}
    </div>
  )
}

export default BookList