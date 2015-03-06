import React from 'react';
import Store from 'dist/stores/userStore';
import Action from 'dist/actions/actions';
import Router from 'react-router';
var Detail = React.createClass({
	mixins: [ Router.Navigation, Router.State ],
	  statics: {
	    fetchData (params) {
	      return Action.userDetail.triggerPromise(params.userName).then((res) => res);
	    }
  	},
	handleSubmit(e){
		var that=this;
		e.preventDefault();
		var user={
			email:this.refs.email.getDOMNode().value,
			name:this.refs.name.getDOMNode().value,
			userName:this.refs.userName.getDOMNode().value
		};
		Action.userUpdate.triggerPromise(user).then(function(){
			that.transitionTo('/browse');
		});		
	},
	getInitialState() {
    	var data=this.props.data.Detail;
    	return {data: data};
  	},
	componentDidMount (){
  			this.refs.email.getDOMNode().value=this.state.data.email;
			this.refs.name.getDOMNode().value=this.state.data.name;
			this.refs.userName.getDOMNode().value=this.state.data.userName;
  	},	
	render(){		
		return (
			<form onSubmit={this.handleSubmit}>
				<fieldset>
					<div className="form-group">
					    <label htmlFor="InputEmail">Email address</label>
					    <input ref="email" type="email" className="form-control" id="InputEmail" placeholder="Enter email"/>
					</div>
					<div className="form-group">
					    <label htmlFor="InputUserName">User name</label>
					    <input ref="userName" type="text" className="form-control" id="InputUserName" placeholder="User name"/>
					</div>
					<div className="form-group">
					    <label htmlFor="InputName">Name</label>
					    <input ref="name" type="text" className="form-control" id="InputName" placeholder="Name"/>
					</div>
					<button type="submit" className="btn btn-default">Submit</button>
				</fieldset>
			</form>
			);
	}
});

export default Detail;