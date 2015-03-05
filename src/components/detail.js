import React from 'react';
import Store from 'dist/stores/userStore';
import Action from 'dist/actions/actions';
import Router from 'react-router';
var Detail = React.createClass({
	mixins: [ Router.State ],
	handleSubmit(e){
		e.preventDefault();
		var user={
			email:this.refs.email.getDOMNode().value,
			name:this.refs.name.getDOMNode().value,
			userName:this.refs.userName.getDOMNode().value
		};		
	},
	completed(data){
  			this.refs.email.getDOMNode().value=data.email;
			this.refs.name.getDOMNode().value=data.name;
			this.refs.userName.getDOMNode().value=data.userName;
  	},
	componentDidMount() {
        this.userDetailSubscription = Action.userDetail.completed.listen(this.completed);
        var userName = this.getParams().userName
        Action.userDetail(userName);
    },
    componentWillUnmount() {
        this.userDetailSubscription();
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