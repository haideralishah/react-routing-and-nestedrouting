import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import NestedHome from './components/homenestedroute';
import NestedAbout from './components/aboutnestedroute';
// import Nav from './components/nav.js';
import './index.css';
// import ReactRouter from 'react-router';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home}>
        <Route path="/homenested" component={NestedHome}>
        </Route>
        <Route path="/aboutnested" component={NestedAbout}>
        </Route>
      </Route>
      <Route path="/about" component={About}>
      </Route>
      <Route path="/contact" component={Contact}>
      </Route>
    </Route>
  </Router >
),
  document.getElementById('root')
);
