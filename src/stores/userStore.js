import Actions from "dist/actions/actions";
import Reflux from "reflux";

var UserStore=Reflux.createStore({
	listenables: Actions,    
    onUsersLoadCompleted(data){
        this.trigger(data);
    },
     onUserDetailCompleted(data){
        this.trigger(data);
    }


});

export default UserStore;