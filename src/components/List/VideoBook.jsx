import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import '../../App.css';
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';  

export function VideoBook() {
  const [vbk, setVideoBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
      fetch("http://localhost:8080/api/products/getProduct/" + id)
          .then(res => res.json())
          .then(result => {
              setVideoBook(result);
          });
  }, [id]);

  return (
    
      <Card >
          <Card.Header style={{ padding: '7px', backgroundColor: 'Violet' } }className='text-center'>ITEM Description</Card.Header>
          <Card.Body>
              <Card.Title className='text-center'><strong>{vbk.productName}</strong></Card.Title>
              <div style={{left:0}}>
              <Card.Text><strong>Author</strong>: {vbk.productAuthor}</Card.Text>
              {vbk.productLang && (
              <Card.Text><strong>Language</strong>: {vbk.productLang.languageDesc}</Card.Text>
              )}
              {vbk.productGenre && (
             <Card.Text><strong>Genre</strong>: {vbk.productGenre.genreDesc}</Card.Text>)}
              </div>
              <br></br>
             <div className="text-center">
              <Card.Text ><strong>Summary</strong>: {vbk.productDescriptionShort}</Card.Text>
              <div style={{backgroundColor:'blueviolet'}}>
              <Card.Text><strong></strong>{vbk.productDescriptionLong}</Card.Text>
              </div>
              </div>
              <div>
                <br></br>
              {vbk.productPublisher && (
              <Card.Text><strong>Publisher Name</strong>: {vbk.productPublisher.publisherName}</Card.Text>
              )}
                            
             
              {/* <Card.Text><strong>Rentable</strong>: { (vbk.rentable==="true") ? 'Yes' : 'NO'}</Card.Text>  */}
               <Card.Text><strong>ISBN</strong>: {vbk.productISBN}</Card.Text>
              <Card.Text><strong>Expiry Date</strong>: {vbk.productOffPriceExpiryDate}</Card.Text>
              </div>
              <br></br>
              <div className="text-center">
              <Button variant="outline-dark"  href="/ListVideoBook">Back</Button>{' '}
              <Button variant="success"  href="">Add To Cart</Button>{' '}
              <Button variant="outline-primary" href="">Close</Button>
              </div>
              <br></br>
          </Card.Body>
          <Card.Footer style={{ padding: '7px', backgroundColor: 'orange' } }className='text-center'>@Bookworm.com</Card.Footer>
      </Card>
    
  );
}
