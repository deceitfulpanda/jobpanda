var React = require('react');

var JobRow = React.createClass({
  jobs : '',
  render: function(){
     for (var key in this.props.jobs){
          this.jobs += this.props.jobs[key];
          };
    return (
        <div>
          {this.props.jobs}
       </div>
      );
  }
}); 

module.exports = JobRow;