import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
  const result = useSelector((state: { cardData: any[] }) => state.cardData);
  console.warn("data in header", result);

  return (
    <div className="header">
      <Link to="/cart">
        <div className="card-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
