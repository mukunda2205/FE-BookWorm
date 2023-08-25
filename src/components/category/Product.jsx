import React from "react";

export default function Product(props) {
  function openPDF(pdfPath) {
    const pdfUrl = `${process.env.PUBLIC_URL}/${pdfPath}`;
    window.open(pdfUrl, '_blank');
  }

  return (
    <div className="card" style={{
      height: '450px'
  }}>
      <div ><img className="product--image" style={{
      height: '290px'
  }} src={props.url} alt="product image" /></div>
  <div>
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button onClick={() => openPDF('Books/The whispering woods selected.pdf')}>Read</button>
      </p>
      </div>
    </div>
  );
}