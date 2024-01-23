import React, { useEffect } from 'react';

import { addToCart, emptyToCart, removeToCart } from './action';
import { useDispatch, useSelector } from 'react-redux';
// import Header from './Header';
import './Header.css';
import { productList } from './ProductAction';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  color: string;
  photo: string; // Adjust the type according to your data structure
  brand: string;
}

const ReduxExample: React.FC = () => {
  const dispatch = useDispatch();
  const data: Product[] = useSelector((state: any) => state.productData);
  console.log('Data in main com', data);

  useEffect(() => {
    console.log("useefect called")
    dispatch(productList()as any);
  }, [dispatch]);
// const staticProduct: Product = {
//     id: 1,
//     name: 'Example Product',
//     category: 'Example Category',
//     price: 50,
//     color: 'Blue',
//     photo: 'example-photo-url',
//     brand: 'Example Brand',
//   };
  return (
    <div>
      <button onClick={() => dispatch(emptyToCart() as any)}>Empty Cart</button>
      <div className='product-container'>
        {data.map((item) => (
          <div className='product-item' key={item.id}>
            <img src={item.photo} alt='' />
            <div> Name: {item.name} </div>
            <div> Color: {item.color} </div>
            <div> Price: {item.price} </div>
            <div> Category: {item.category} </div>
            <div> Brand: {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item) as any)}>Add To Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id) as any)}>Remove To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    // <div>
    //      <button onClick={() => dispatch(addToCart(staticProduct) as any)}>Add To Cart</button>
    //      <button onClick={() => dispatch(removeToCart(staticProduct) as any)}>Remove To Cart</button>
    //      <button onClick={() => dispatch(emptyToCart() as any)}>Empty Cart</button>
    // </div>
  );
};

export default ReduxExample;
