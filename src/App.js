import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
// eslint-disable-next-line
import { addToCart } from './actions/cart';

import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { ProductListing } from './components/ProductListing/ProductListing';

function App(props) {
    // eslint-disable-next-line
    const {dispatch, order} = props;
    return (
        <BrowserRouter>
            <>
                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route path="/products" component={ProductListing} />
                </Layout>

                {/*<button onClick={() => dispatch(addToCart('coś', 3))}>*/}
                {/*add to cart*/}
                {/*</button>*/}
                {/*{JSON.stringify(order)}*/}
            </>
        </BrowserRouter>
    );
}

const mapStateToProps = (state) => {
    const { order } = state;
    return { order };
};

export default connect(
    mapStateToProps,
)(App);
