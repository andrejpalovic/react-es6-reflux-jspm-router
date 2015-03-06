import Reflux from 'reflux';


var Actions = Reflux.createActions({
	"request":{asyncResult: true},
	"usersLoad":{asyncResult: true},
	"userDetail":{asyncResult: true},
	"userUpdate":{asyncResult: true}
	
});

export default Actions;

Actions.usersLoad.listen(function(){
	Actions.request();
	new Promise(function(resolve,reject){
    		setTimeout(function() {
    			resolve(users);
    		}, 1000);
    	}).then(function(data){
    		Actions.usersLoad.completed(data);
    		Actions.request.completed();
    	});
});


Actions.userDetail.listen(function(userName){
	Actions.request();
	new Promise(function(resolve,reject){
    		setTimeout(function() {
    			var user=users.filter(function(usr){
    				return usr.userName===userName;
    			});
    			resolve(user[0]);
    		}, 1000);
    	}).then(function(data){
    		Actions.userDetail.completed(data);
    		Actions.request.completed();
    	});
});

Actions.userUpdate.listen(function(newUser){
	Actions.request();
	new Promise(function(resolve,reject){
    		setTimeout(function() {
    			var user=users.filter(function(usr){
    				return usr.userName===newUser.userName;
    			})[0];
    			user.userName=newUser.userName;
    			user.name=newUser.name;
    			user.email=newUser.email;
    			resolve(user);
    		}, 1000);
    	}).then(function(data){
    		Actions.userUpdate.completed(data);
    		Actions.request.completed();
    	});
});


var users = [
  			{userName:'palovia',name:"Andrej", email:"andrej@andrej.com"},
  			{userName:'polakp',name:"Peter", email:"Peter@Peter.com"}];      