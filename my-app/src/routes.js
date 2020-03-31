import React from 'react';

import Home from './pages/Home/Home';
import Shop from './containers/ProductsContainer';
import Cart from './containers/CartsContainer';
import View from './components/View/View';
import NotFound from './pages/NotFound/NotFound';
import ShopActionPage from './pages/Shop/ShopActionPage';
const routes = [
    {
        path : '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path : '/shop',
        exact: true,
        main: ({match}) => <Shop match={match}/>
    },
    {
        path : '/shop/add',
        exact: true,
        main: ({history}) => <ShopActionPage history={history} />
    },
    {
        path : '/shop/:id',
        exact: true,
        main: ({match,history}) => <View match={match} history={history} />
    },
    {
        path : '/shop/:id/edit',
        exact: true,
        main: ({match,history}) => <ShopActionPage match={match} history={history} />
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
    }
]

export default routes;