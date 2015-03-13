var React = require('react');
var mui = require('material-ui');
var JobRow = require('./JobRow.jsx');
var Menu = mui.Menu;

var JobList = React.createClass({
  render: function(){
    return (
      <span className="job-row">
        {this.props.jobs.map(function(job) {
          return /*<JobRow key={job._id} data={job} />*/;
        })}
      </span>
      );
  }
});

module.exports = JobList;