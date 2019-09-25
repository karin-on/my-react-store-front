import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { ProductListing } from './components/ProductListing/ProductListing';
import { Cart } from './components/Cart/Cart';

function App() {
    return (
        <BrowserRouter basename="/my-react-store-front">
            <>
                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route path="/products" component={ProductListing} />
                    <Route path="/cart" component={Cart} />
                </Layout>
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
