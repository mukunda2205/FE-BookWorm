import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./List.css"

export function ListEBook() {
  const [eBook, seteBook] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8080/api/products/getProducts")
      .then(res => res.json())
      .then((result) => { seteBook(result); });
  }, []);

  return (
    <div className="ebook-list-container">
      <h1 className="text-center ebook-list-header"><strong>EBook List</strong></h1>
      <br />

      <Row xs={1} sm={2} md={3} lg={4} xl={4} className="ebook-card-row">
        {eBook.map((ebk, idx) => (
          <Col key={idx} className="ebook-card-col">
            <Card className="ebook-card">
              <Card.Img
                variant="top"
                src="\Images\EBooks\EnglishBooksCovers\TheGreatSecularKingCover.jpg"
                roundedCircle
                className="img-fluid ebook-card-image"
              />
              <Card.Body>
                <Card.Text><strong>Name</strong>: {ebk.productName}</Card.Text>
                <Card.Text><strong>Author</strong>: {ebk.productAuthor}</Card.Text>
                <Card.Text><strong>Price:</strong> {ebk.productSpCost}</Card.Text>
                <div className="button-container">
                  <Button variant="outline-warning" href={'/Ebook/' + ebk.productId}>Display</Button>
                  <Button variant="danger" href={'/Cart/' + ebk.productId}>Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
