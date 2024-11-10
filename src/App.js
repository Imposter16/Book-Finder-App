import React, { useState, useEffect } from "react";
import "./App.css";
import BookCard from "./components/BookCard";
import Loader from "./components/Loader";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks("programming");
  }, []);

  const fetchBooks = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await response.json();
      setBooks(data.docs.slice(0, 10));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const handleSearch = () => {
    if (searchTerm) {
      fetchBooks(searchTerm);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Book Finder</h1>
      </nav>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="book-list">
          {books.map((book) => (
            <BookCard key={book.key} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
