import Action from 'dist/actions/actions';
import React from 'react';

var BusyIndicator = React.createClass({      
    getInitialState() {
    	return {enabled:false};
  	},
    request(){
      this.setState({enabled:true});
    },
    requestCompleted(){
      this.setState({enabled:false});
    },
    componentDidMount() {
        this.requestCompletedSubscription = Action.request.completed.listen(this.requestCompleted);
        this.requestSubscription = Action.request.listen(this.request);
    },
    componentWillUnmount() {
        this.requestCompletedSubscription();
        this.requestSubscription();
    },
    render() {    	
    	var busy;
    	if(this.state.enabled){
    		busy=<div className="modalBlockout"><i className="fa fa-spinner fa-4x fa-spin busy-indicator"></i></div>
      	}
      	return (
    		<div>{busy}</div>    			
   		);
  	}
 
});

export default BusyIndicator;