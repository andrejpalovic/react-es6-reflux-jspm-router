import Actions from "dist/actions/actions";
import Reflux from "reflux";

var UserStore=Reflux.createStore({
	listenables: Actions,    
    onUsersLoad(){
		Actions.request();
		new Promise(function(resolve,reject){
	    		setTimeout(function() {
	    			resolve(users);
	    		}, 1000);
	    	}).then(function(data){
	    		Actions.usersLoad.completed(data);
	    		Actions.request.completed();
	    	});
	},
	onUserDetail(userName){
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
	},
	onUserUpdate(newUser){
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
	}
});

export default UserStore;

var users = [
  			{userName:'palovia',name:"Andrej", email:"andrej@andrej.com"},
  			{userName:'polakp',name:"Peter", email:"Peter@Peter.com"}];   