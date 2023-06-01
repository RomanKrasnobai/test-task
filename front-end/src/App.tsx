import React, {useEffect, useState} from 'react';
import './App.scss';
import ProductsComponent from './products/products.component';
import {Product} from './core/models/product.model';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3001/products`)
        .then(res => res.json()
        .then((products: Product[]) => {
          setProducts(products);
        })
        .catch(error => console.log(error))
    )
  }, [])

  return (
    <>
      <div className="home-title">
        <div><p>THE INNOVATION LUXURY VINYL PLANK</p></div>
        <div><h1>Let's Get Started</h1></div>
      </div>

      <div className="products">
        <ProductsComponent products={products} />
      </div>
    </>
  );
}

export default App;
