import React, { useState, useContext } from 'react'
import BooksContext from '../context/books';

const BookEdit = ({book, onSubmit}) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  }
  return (
    <form action="" className='book-edit' onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" className='input' onChange={handleChange} value={title} />
      <button className='button is-primary'>Save</button>
    </form>
  )
}

export default BookEdit