
import React from 'react';
import Shell from './components/layouts/shell';
import Home from './components/home';
import Browse from './components/browse';
import About from './components/about';
import Detail from './components/detail';
import Router from 'react-router';

import Action from 'dist/actions/actions';
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
function fetchData(routes, params) {
  var data = {};
  return Promise.all(routes
    .filter(route => route.handler.fetchData)
    .map(route => {
      return route.handler.fetchData(params).then(d => {data[route.name] = d;});
    })
  ).then(() => data);
}

Router.run(routes, function (Handler, state) {
  Action.request();
  fetchData(state.routes, state.params).then((data) => {
    Action.request.completed();
    React.render(<Handler data={data}/>, mountNode);
  });
});



