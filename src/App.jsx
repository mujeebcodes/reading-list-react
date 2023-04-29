import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:5174/books');
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:5174/books', {title});

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks)
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:5174/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  }

  const editBookById = async (id, newTitle) => {

    const response = await axios.put(`http://localhost:5174/books/${id}`, {title: newTitle});

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, ...response.data}
      }

      return book;
    })

    setBooks(updatedBooks);
  }

  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
