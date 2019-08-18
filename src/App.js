import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cart';
import './App.css';


function App(props) {
  const { dispatch, order } = props;

  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart('coś', 3))}>add to cart</button>

      { JSON.stringify(order) }
    </div>
  );
}

const mapStateToProps = (state) => {
  const { order } = state;
  return { order };
};

export default connect(
    mapStateToProps
)(App);
