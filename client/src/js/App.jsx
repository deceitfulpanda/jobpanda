//var Router = require('react-router');
var React = require('react');
var injectTapEventPlugin = require("react-tap-event-plugin");
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
var NavBar = require('./components/NavBar.jsx');

var Main = React.createClass({
  render: function(){
    return (
        <div>
          <NavBar/>
        </div>
      );
  }
});

React.render(<Main />, document.getElementById('app'));
