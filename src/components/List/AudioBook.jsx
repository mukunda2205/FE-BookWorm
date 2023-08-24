import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import './List.css'
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';  

export function AudioBook() {
  const [abk, setAudioBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
      fetch("http://localhost:8080/api/products/getProduct/" + id)
          .then(res => res.json())
          .then(result => {
              setAudioBook(result);
          });
  }, [id]);

  return (
    
      <Card >
          <Card.Header style={{ padding: '7px', backgroundColor: 'Violet' } }className='text-center'>ITEM Description</Card.Header>
          <Card.Body>
              <Card.Title className='text-center'><strong>{abk.productName}</strong></Card.Title>
              <div style={{left:0}}>
              <Card.Text><strong>Author</strong>: {abk.productAuthor}</Card.Text>
              {abk.productLang && (
              <Card.Text><strong>Language</strong>: {abk.productLang.languageDesc}</Card.Text>
              )}
              {abk.productGenre && (
             <Card.Text><strong>Genre</strong>: {abk.productGenre.genreDesc}</Card.Text>)}
              </div>
              <br></br>
             <div className="text-center">
              <Card.Text ><strong>Summary</strong>: {abk.productDescriptionShort}</Card.Text>
              <div style={{backgroundColor:'blueviolet'}}>
              <Card.Text><strong></strong>{abk.productDescriptionLong}</Card.Text>
              </div>
              </div>
              <div>
                <br></br>
              {abk.productPublisher && (
              <Card.Text><strong>Publisher Name</strong>: {abk.productPublisher.publisherName}</Card.Text>
              )}
                            
             
              {/* <Card.Text><strong>Rentable</strong>: { (abk.rentable==="true") ? 'Yes' : 'NO'}</Card.Text>  */}
               <Card.Text><strong>ISBN</strong>: {abk.productISBN}</Card.Text>
              <Card.Text><strong>Expiry Date</strong>: {abk.productOffPriceExpiryDate}</Card.Text>
              </div>
              <br></br>
              <div className="text-center">
              <Button variant="outline-dark"  href="/ListAudioBook">Back</Button>{' '}
              <Button variant="success"  href=" ">Add To Cart</Button>{' '}
              <Button variant="outline-primary" href="">Close</Button>
              </div>
              <br></br>
          </Card.Body>
          <Card.Footer style={{ padding: '7px', backgroundColor: 'orange' } }className='text-center'>@Bookworm.com</Card.Footer>
      </Card>
    
  );
}