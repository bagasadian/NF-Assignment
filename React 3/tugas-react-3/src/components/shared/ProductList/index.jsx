import { useState } from "react";
import booksData from "../../../utils/books";
import "./style.css";

export default function Book() {
  // simpan data buku di state
  const [books, setBooks] = useState(booksData);

  // fungsi untuk menambahkan data 
  const addBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "Si Anak Pintar",
      author: "Tere Liye",
      year: 2025,
      description: "Ini adalah buku baru yang ditambahkan lewat hooks.",
      image: "src/assets/images/10.png",
    };
    setBooks([...books, newBook]);
  };

  return (
    <div className="book-page">
      <h1 className="book-title">Koleksi Buku</h1>

      <button className="book-btn" onClick={addBook}>
        + Tambah Buku
      </button>

      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} />

            <div className="book-info">
              <h2>{book.title}</h2>
              <p><b>✍️ Penulis:</b> {book.author}</p>
              <p><b>📅 Tahun:</b> {book.year}</p>
              <p>{book.description}</p>
              <button className="book-btn">📖 Baca Detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
