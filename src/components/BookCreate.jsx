import React, { useState } from 'react'

const BookCreate = ({onCreate}) => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit =(event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  }

  return (
    <div className='book-create'>
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className='input' type="text" onChange={handleChange} value={title} />
            <button className='button' type='button' onClick={handleSubmit}>Add book</button>
        </form>
    </div>
  )
}

export default BookCreate