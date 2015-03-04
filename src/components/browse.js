import React from 'react';
import Store from 'dist/stores/userStore';
import Action from 'dist/actions/actions';

var Browse = React.createClass({
    getInitialState() {
    	return {data: [],loaded:false};
  	},
  	completed(data){
  		this.setState( {data: data,loaded:true});
  	},
  	componentDidMount() {
        Action.usersLoad.completed.listen(this.completed);
        Action.usersLoad.trigger();

    },   
	render(){
		var rows=this.state.data.map(function(user){
			var url='#/detail/'+user.userName
			return <tr><td><a href={url}>{user.name}</a></td><td>{user.email}</td></tr>;
		});
		return(			
				<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
					
			);
	}

});

export default Browse