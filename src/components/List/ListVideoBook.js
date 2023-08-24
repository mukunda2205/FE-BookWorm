import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/esm/Container";
import "./List.css"
export function ListVideoBook(){

    const [vBook, setvBook] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/products/getProducts")
            .then(res => res.json())
            .then((result) => { setvBook(result); }
            );
    }, []);
    
      return (
        
        <div>
        <h1 className="text-center" style={{padding:'7px', color: 'black'}}><strong>VideoBook List</strong> </h1>
          <br></br>
        {vBook.map(vbk => (
  <Row xs={1} sm={2} md={3} lg={4} xl={4} gap={3}>
        {Array.from({ length: vBook.length }).map((_, idx) => (
        <Col key={idx}>
          
          <Card style={{width:'18rem'}}  className="App-card1 m-auto" >
          <Card.Img variant="top" src="\Images\VideoBook\Video.jpeg" roundedCircle style={{padding:'7px',color:'red' } } />
          <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-primary ms-2">New</span>
                    </h5>
                  </div>
          </div>
          
          <Card.Body className="App-card">
            
            {/* <Card.Title  style={{padding:'7px',color:'blue'}}>Details</Card.Title> */}
            <Card.Text><strong>Name</strong> : {vbk.productName}</Card.Text>
            <Card.Text><strong>Author</strong> :{vbk.productAuthor}</Card.Text>
            <Card.Text ><strong>Selling Price</strong>: <s style={{color:'red'}}>{vbk.productSpCost}</s></Card.Text>
            <Card.Text><strong>Offer Price</strong>: {vbk.productOfferPrice}</Card.Text>
            <div>
            <Button variant="outline-warning"  href={'/VideoBook/'+ vbk.productId}>Display</Button>{'  '}
            
            <Button variant="danger"  href={'/Cart/'}>Add to Cart</Button>
            </div> 
            
           </Card.Body>
         </Card>
        </Col>
        ))}
        </Row>

          ))}
        </div>
      
      );
              
    
    }
