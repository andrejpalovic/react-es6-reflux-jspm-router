import Reflux from 'reflux';

var Actions = Reflux.createActions([
	"request",
	"requestCompleted",

	"usersLoad",
	"usersLoadCompleted",
	"usersLoadFailed"
]);

export default Actions;

Actions.usersLoad.listen(function(){
	Actions.request()
	new Promise(function(resolve,reject){
    		setTimeout(function() {
    			resolve(users);
    		}, 1000);
    	}).then(function(data){
    		Actions.usersLoadCompleted(data);
    		Actions.requestCompleted();
    	});
});


var users = [
  			{userName:'palovia',name:"Andrej", email:"andrej@andrej.com"},
  			{userName:'polakp',name:"Peter", email:"Peter@Peter.com"}];      