import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart, emptyToCart } from './action';
import { productList } from './ProductAction';
import Header from './Header';
import './Header.css';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  color: string;
  brand: string;
  photo: string;
}

const ReduxEg: React.FC = () => {
  const dispatch = useDispatch();
  const data: Product[] = useSelector((state: { productData: Product[] }) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => dispatch(emptyToCart())}>Empty Cart</button>
      <div className='product-container'>
        {data.map((item: Product, index: number) => (
          <div className='product-item' key={index}>
            <img src={item.photo} alt='' />
            <div> Name: {item.name} </div>
            <div> Color: {item.color} </div>
            <div> Price: {item.price} </div>
            <div> Category: {item.category} </div>
            <div> Brand: {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}>Remove To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReduxEg;
