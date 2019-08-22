import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'normalize-css/normalize.css';
import './index.scss';
// import '../node_modules/font-awesome/scss/font-awesome.scss';
// import 'font-awesome/scss/font-awesome.scss';
import * as serviceWorker from './serviceWorker';

import cart from './reducers/cart';
import App from './App';


const store = createStore(
    cart,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
