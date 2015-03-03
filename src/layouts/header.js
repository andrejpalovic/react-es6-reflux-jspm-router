import React from 'react';

var Header = React.createClass({
	render(){
		return (
			<nav className="navbar navbar-default" role="navigation">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			        <span className="sr-only">Toggle Navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#">
			        <i className="fa fa-home"></i>
			        <span></span>
			      </a>
			    </div>
			     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			       	<li><a href="#/">Dashboard</a></li>
		     		<li><a href="#/paymant">Payment</a></li>
			      </ul>			     
			    </div>
			  </nav>
			);
	}
});
export default Header;