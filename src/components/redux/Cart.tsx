import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface CartItem {
  key: string;
  name: string;
  color: string;
  price: number;
  brand: string;
  category: string;
}

const Cart: React.FC = () => {
  const cardData: CartItem[] = useSelector((state: { cardData: CartItem[] }) => state.cardData);

  return (
    <div>
      <Link to="/reduceg">Go to Product Link</Link>
      <h1>Cart Page</h1>
      <div className="cart-detail-container">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Color</td>
              <td>Price</td>
              <td>Brand</td>
              <td>Category</td>
            </tr>
          </thead>
          <tbody>
            {cardData.map((item) => (
              <tr key={item.key}>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>000</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>000</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span>
            <span>000</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
