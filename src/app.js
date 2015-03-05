
import React from 'react';
import Shell from './components/layouts/shell';
import Home from './components/home';
import Browse from './components/browse';
import About from './components/about';
import Detail from './components/detail';
import Router from 'react-router';
var Route  = Router.Route;

var  mountNode = document.getElementById('app'); 
    
var routes = (
   <Route handler={Shell}> 
   		<Route name="Dashboard" path="/" handler={Home} /> 
   		<Route name="Paymant" path="/about" handler={About} />
   		<Route name="Browse" path="/browse" handler={Browse} />
   		<Route name="Detail" path="/detail/:userName" handler={Detail} />
   </Route>   
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, mountNode);
});



