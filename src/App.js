import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { ProductListing } from './components/ProductListing/ProductListing';
import { ProductPage } from './components/ProductPage/ProductPage';

function App() {
    return (
        <BrowserRouter basename="/my-react-store-front">
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/products" component={ProductListing} />
                    <Route path="/product" component={ProductPage} />
                </Switch>
            </Layout>
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
