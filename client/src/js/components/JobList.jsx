var React = require('react');
var mui = require('material-ui');
// var JobRow = require('./JobRow.jsx');
var Reactable = require('reactable');
var Table = Reactable.Table;

var JobList = React.createClass({
  render: function(){
    return (
      <Table 
      className="table" 
      data={this.props.jobs}
      sortable={true}
      filterable={['Location', 'Company', 'Title', 'source_network', 'url', 'apply_link', 'favorite']}
      itemsPerPage={15} 
      />
      );
  }
});

module.exports = JobList;