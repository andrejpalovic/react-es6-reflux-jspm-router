
import React from 'react';
import Shell from './layouts/shell';
import Paymant from './payment/payment';
import Dashboard from './dashboard/dashboard';
import Router from 'react-router';
var Route  = Router.Route;

var  mountNode = document.getElementById('app'); 
    
var routes = (
   <Route handler={Shell}> 
   		<Route name="Dashboard" path="/" handler={Dashboard} /> 
   		<Route name="Paymant" path="/paymant" handler={Paymant} />
   </Route>   
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, mountNode);
});



