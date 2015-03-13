var React = require('react');
var mui = require('material-ui');
var Menu = mui.Menu;

var JobRow = React.createClass({
  render: function(){
    return (
        <Menu menuItems={[this.props.job]} />
      );
  }
}); 

module.exports = JobRow;