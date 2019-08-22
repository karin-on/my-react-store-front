import React from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line
import { addToCart } from './actions/cart';

import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';

function App(props) {
    // eslint-disable-next-line
    const {dispatch, order} = props;
    return (
        <>
            <Layout>
                <Home />
            </Layout>

            {/*<button onClick={() => dispatch(addToCart('coś', 3))}>*/}
            {/*add to cart*/}
            {/*</button>*/}
            {/*{JSON.stringify(order)}*/}
        </>
    );
}

const mapStateToProps = (state) => {
    const { order } = state;
    return { order };
};

export default connect(
    mapStateToProps,
)(App);
