import React from 'react';
import { Link } from 'react-router-dom';

const Topic: React.FC = () => {
  return (
    <nav>
    <Link to="/studenteg">StudentEgClassComp</Link>
    <Link to="/studentfunc">StudentegFuncComp</Link>
    <Link to="/axioseg">AxiosExample</Link>
    </nav>
  );
};

export default Topic;
