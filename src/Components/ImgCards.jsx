// ImgCard.jsx
import React, { useState, useEffect } from 'react';
import './ImgCard.css'
const ImgCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from data.json file
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <div className='imgc'>
      <h2>Products</h2>
      <ul className='ul_list'>
        {products.map((product) => (
          <li className='listitem' key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.imageSrc} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button className='btn1'>Add</button>
            <button className='btn2'>Remove</button>
          </li>
        ))}
      </ul>

    </div>
    
    </>


  );

};

export default ImgCards;
