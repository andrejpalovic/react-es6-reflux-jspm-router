import React from 'react';
import Action from 'dist/actions/actions';

var Browse = React.createClass({
    statics: {
	    fetchData (params) {
	      return Action.usersLoad.triggerPromise().then((res) => res);
	    }
  	},
    getInitialState() {
    	return {data: this.props.data.Browse};
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