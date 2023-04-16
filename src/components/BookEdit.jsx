import React, { useState } from 'react'

const BookEdit = ({book, onSubmit}) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
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