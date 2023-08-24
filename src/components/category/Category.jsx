import "./Category.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import { useEffect, useState } from "react";

export default function Category() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         let res = axios.get("http://hdshhds");
//         setBooks(res);
//       } catch (e) {
//         console.warn(e);
//       }
//     })();
//   }, []);

  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      <h1>React multi carousel</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
