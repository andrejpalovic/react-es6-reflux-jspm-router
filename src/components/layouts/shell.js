import React from 'react';
import Router from 'react-router';
import Header from './header';
import BusyIndicator from './busyIndicator'
var { Route, RouteHandler, Link } = Router;


var Shell = React.createClass({  
    render() {
      return (
        <div>
          <Header/>
          <BusyIndicator/>
          <div className="container-fluid">
            <RouteHandler/>
          </div>
         </div>
      );
    }
 
});

export default Shell;