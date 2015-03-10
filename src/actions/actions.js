import Reflux from 'reflux';


var Actions = Reflux.createActions({
	"request":{asyncResult: true},
	"usersLoad":{asyncResult: true},
	"userDetail":{asyncResult: true},
	"userUpdate":{asyncResult: true}
	
});

export default Actions;




   