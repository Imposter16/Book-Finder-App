import React from "react";
import "./BookCard.css";

const BookCard = ({ book }) => {
  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150?text=No+Image+Available";

  return (
    <div className="book-card">
      <img src={coverImage} alt={`${book.title} cover`} />
      <h3>{book.title}</h3>
      <p>Author: {book.author_name ? book.author_name.join(", ") : "N/A"}</p>
      <p>Published: {book.first_publish_year || "Unknown"}</p>
    </div>
  );
};

export default BookCard;
