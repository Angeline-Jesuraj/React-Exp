import React from 'react';
import { Link } from 'react-router-dom';

const Topic: React.FC = () => {
  return (
    <nav>
    <Link to="/studenteg">StudentEgClassComp</Link>
    <Link to="/studentfunc">StudentegFuncComp</Link>
    <Link to="/axioseg">AxiosExample</Link>
    <Link to="/reduxeg">ReduxExample</Link>
    <Link to ="/reducexample">ReduxSaga</Link>
    </nav>
  );
};

export default Topic;
