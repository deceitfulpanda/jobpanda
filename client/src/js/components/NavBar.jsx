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
  { payload: '2', text: 'All Voice' },
  { payload: '3', text: 'All Text' },
  { payload: '4', text: 'Complete Voice' },
  { payload: '5', text: 'Complete Text' },
  { payload: '6', text: 'Active Voice' },
  { payload: '7', text: 'Active Text' },
];
var iconMenuItems = [
  { payload: '1', text: 'Download' },
  { payload: '2', text: 'More Info' }
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
          <ToolbarGroup key={2} float="right">
             <FontIcon className="mui-icon-pie" />
             <FontIcon className="mui-icon-sort" />
             <DropDownIcon iconClassName="icon-navigation-expand-more" menuItems={iconMenuItems} />
             <span className="mui-toolbar-separator">&nbsp;</span>
             <RaisedButton label="Login" primary={true} />
          </ToolbarGroup>
        </Toolbar>
      );
  }
});

module.exports = NavBar;