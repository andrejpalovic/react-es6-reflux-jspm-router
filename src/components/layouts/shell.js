import React from 'react';
import Router from 'react-router';
import Header from './header';
var { Route, RouteHandler, Link } = Router;


var Shell = React.createClass({
  	render() {
    	return (
    		<div>
    			<Header/>
		     	<div className="container-fluid">
		     		<RouteHandler/>
		     	</div>
		     </div>
   		);
  	}
 
});

export default Shell;