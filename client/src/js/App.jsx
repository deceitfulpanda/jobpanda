//var Router = require('react-router');
var React = require('react');
window.React = React;
var injectTapEventPlugin = require("react-tap-event-plugin");
var mui = require('material-ui');

//Components
var NavBar = require('./components/NavBar.jsx');
var JobListBox = require('./components/JobListBox.jsx');
var Paper = mui.Paper;


//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var Main = React.createClass({
  render: function(){
    return (
        <div className="full">
          <NavBar />
          <JobListBox />
        </div>
      );
  }
});

React.render(<Main />, document.getElementById('app'));
