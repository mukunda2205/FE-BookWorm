import React from 'react';
import Card from 'react-bootstrap/Card';
import './Home.css';

function Home2() {
  return (
    <div className="horizontal-card-container">
      <Card className="custom-card">
        <h1 style={{ textAlign: 'center', fontSize: '2rem', color: '#008080',fontWeight: 'bold', marginBottom: '20px' }}>E-Book</h1>

        <Card.Img src="Images\card1.jpg" alt="Card image" />
        <Card.ImgOverlay className="custom-overlay">
        </Card.ImgOverlay>
      </Card>
      
      <Card className="custom-card">
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#008080', fontWeight: 'bold', marginTop: '20px' }}>Audio-Book</h1>
        <Card.Img src="Images\Audio.jpg" alt="Card image" />
        <Card.ImgOverlay className="custom-overlay">
          {/* Add overlay content */}
        </Card.ImgOverlay>
      </Card>
      <Card className="custom-card">
       <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#008080', fontWeight: 'bold', marginTop: '20px' }}>Video-Book</h1>
        {/* <iframe src="https://giphy.com/embed/d61hwEKNLBqb5WDoYP" width="400" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/tlc-network-d61hwEKNLBqb5WDoYP"></a></p> */}
        <iframe src="https://giphy.com/embed/IzdLFDRGibmnt0BrBV" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ApploverSoftwareHouse-wtf-radek-applover-IzdLFDRGibmnt0BrBV"></a></p>
        <Card.ImgOverlay className="custom-overlay">
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Home2;
