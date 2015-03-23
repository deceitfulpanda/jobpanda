//var Router = require('react-router');
var React = require('react');
window.React = React;
var injectTapEventPlugin = require("react-tap-event-plugin");
var mui = require('material-ui');

//Components
var Paper = mui.Paper;


//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var Login = React.createClass({
  render: function(){
    return (
        <div className="full">
	        <LoginFields />
	        <SubmitFields />
        </div>
      );
  }
});

var LoginFields = React.createClass({
	render: function(){
		return (
			<TextField defaultValue= 'Username' />
			<TextField defaultValue= 'Password' />
		);
	}
});

var SubmitFields = React.createCLass({
	render: function(){
		return (
			<FlatButton label="Submit" primary={true} />
		)
	}
});

React.render(<Login />, document.getElementById('app'));
