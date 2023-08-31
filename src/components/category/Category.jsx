import React, { useEffect, useState } from "react";
import "./Category.css"

export default function Category() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/myshelf/customer/1", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.getItem("Token")
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setBooks(data); 
    });
  }, []);

  return (
    <div className="card-container">
      {books.map((book, index) => (
        <div key={index} className="card" style={{ width: "18rem" }}>
          <img src={book.imagePath} className="card-img-top" alt={book.name} />
          <div className="card-body">
            <h5 className="card-title">{book.name}</h5>
            <p className="card-text">{book.description}</p>
            <a href={book.filePath} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Open PDF
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
