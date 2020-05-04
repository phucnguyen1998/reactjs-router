import React from 'react';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import NotFound from './Components/NotFound';
import Products from './Components/Products';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/about',
        exact: false,
        main: () => <About/>
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact/>
    },
    {
        path: '/products',
        exact: false,
        main: ({match}) => <Products match = {match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound/>
    },
    
];

export default routes;