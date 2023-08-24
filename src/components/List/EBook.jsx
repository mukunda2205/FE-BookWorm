import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import '../../App.css';
import { useParams } from "react-router-dom"  

export function EBook() {
  const [ebk, setEBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
      fetch("http://localhost:8080/api/products/getProduct/" + id)
          .then(res => res.json())
          .then(result => {
              setEBook(result);
          });
  }, [id]);

  return (
    
      
      <Card >
          <Card.Header style={{ padding: '7px', backgroundColor: 'Violet' } }className='text-center'>ITEM Description</Card.Header>
          <Card.Body>
              <Card.Title className='text-center'><strong>{ebk.productName}</strong></Card.Title>
              <div style={{left:0}}>
              <Card.Text><strong>Author</strong>: {ebk.productAuthor}</Card.Text>
              {ebk.productLang && (
              <Card.Text><strong>Language</strong>: {ebk.productLang.languageDesc}</Card.Text>
              )}
              {ebk.productGenre && (
             <Card.Text><strong>Genre</strong>: {ebk.productGenre.genreDesc}</Card.Text>)}
              </div>
              <br></br>
             <div className="text-center">
              <Card.Text ><strong>Summary</strong>: {ebk.productDescriptionShort}</Card.Text>
              <div style={{backgroundColor:'blueviolet'}}>
              <Card.Text><strong></strong>{ebk.productDescriptionLong}</Card.Text>
              </div>
              </div>
              <div>
                <br></br>
              {ebk.productPublisher && (
              <Card.Text><strong>Publisher Name</strong>: {ebk.productPublisher.publisherName}</Card.Text>
              )}
                            
             
              {/* <Card.Text><strong>Rentable</strong>: { (ebk.rentable==="true") ? 'Yes' : 'NO'}</Card.Text>  */}
               <Card.Text><strong>ISBN</strong>: {ebk.productISBN}</Card.Text>
              {/* <Card.Text><strong>Expiry Date</strong>: {ebk.productOffPriceExpiryDate}</Card.Text> */}
              </div>
              <br></br>
              <div className="text-center">
              <Button variant="outline-dark"  href="/ListEbook">Back</Button>{' '}
              <Button variant="success"  href="">Add To Cart</Button>{' '}
              <Button variant="outline-primary" href="">Close</Button>{' '}
              <Button variant="outline-warning" href="">RENT</Button>
              </div>
              <br></br>
          </Card.Body>
          <Card.Footer style={{ padding: '7px', backgroundColor: 'orange' } }className='text-center'>@Bookworm.com</Card.Footer>
      </Card>

  );
}