var mui = require('material-ui')
var React = require('react');

//NavBar Components
var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var DropDownMenu = mui.DropDownMenu;
var FontIcon = mui.FontIcon;
var RaisedButton = mui.RaisedButton;
var DropDownIcon = mui.DropDownIcon;

var filterOptions = [
  { payload: '1', text: 'About' },
  { payload: '2', text: 'My Jobs' },
];



var NavBar = React.createClass({
  render: function(){
    return (
        <Toolbar>
          <ToolbarGroup key={0} float="left">
             <a className="hidden-link" href="/"><h2 className="mui-app-bar-title">JobPanda</h2></a>
          </ToolbarGroup>
          <ToolbarGroup key={1} float="left">
             <DropDownMenu menuItems={filterOptions} />
          </ToolbarGroup>
          <ToolbarGroup className="login" key={2} float="right">
             <RaisedButton label="Log out" linkButton={true} primary={true} href="/login" />
          </ToolbarGroup>
        </Toolbar>
      );
  }
});

module.exports = NavBar;