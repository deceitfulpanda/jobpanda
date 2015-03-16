var React = require('react');

var JobRow = React.createClass({
  render: function(){
    console.log(this.props);
    return (
      <div>
          {this.props.data.text}
      </div>
      );
  }
}); 

module.exports = JobRow;