import Actions from "dist/actions/actions";
import Reflux from "reflux";

var UserStore=Reflux.createStore({
	listenables: Actions,

    init() {
        this.users = [
  			{userName:'palovia',name:"Andrej", email:"andrej@andrej.com"},
  			{userName:'polakp',name:"Peter", email:"Peter@Peter.com"}];      
    },
    onUsersLoad(){
        new Promise(function(resolve,reject){
    		setTimeout(function() {
    			resolve(UserStore.users);
    		}, 10000);
    	}).then(function(data){
    		Actions.usersLoad.completed.trigger(data);
    	});
    }

});

export default UserStore;