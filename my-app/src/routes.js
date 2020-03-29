import React from 'react';

import Home from './pages/Home';
import Shop from './containers/ProductsContainer';
import Cart from './containers/CartsContainer';
import View from './components/View';
import NotFound from './components/NotFound';
const routes = [
    {
        path : '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path : '/shop',
        exact: false,
        main: ({match}) => <Shop match={match}/>
    },
    {
        path : '/cart',
        exact: false,
        main: () => <Cart/>
    },
    {
        path : '',
        exact: false,
        main: () => <NotFound/>
    },
    {
        path : '/shop/:name',
        exact: false,
        main: ({match}) => <View match={match}/>
    },

]

export default routes;