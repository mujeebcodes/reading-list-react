import { useEffect, useContext } from 'react'
import './App.css'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
  const {fetchBooks} = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList  />
      <BookCreate  />
    </div>
  )
}

export default App
