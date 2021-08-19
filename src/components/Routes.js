import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Portifolio from '../pages/Portifolio'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portifolio" component={Portifolio} />
    </BrowserRouter>
);

export default Routes
