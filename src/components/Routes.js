import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Portifolio from '../pages/Portifolio'
import Details from '../pages/Details'
import Favorites from '../pages/Favorites'

const NoMatchRoute = () => <div>404 Page</div>;
const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portifolio" component={Portifolio} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/details/:id/:name" component={Details} />
            <Route component={NoMatchRoute} />
        </Switch>
    </Router>
);

export default Routes
