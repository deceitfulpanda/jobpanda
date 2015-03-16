var React = require('react');
var Reactable = require('reactable');
var Table = Reactable.Table;
var Tr = Reactable.Tr;
var unsafe = Reactable.unsafe;

var JobList = React.createClass({
  render: function(){
    return (
      <Table 
      className="job-table" 
      data={this.props.jobs}
      sortable={true}
      filterable={['location', 'company', 'title', 'source_network', 'url', 'apply_link', 'favorite']}
      itemsPerPage={15} 
      columns={[
        {key:'title', label: 'Title'},
        {key:'company', label: 'company'}, 
        {key:'location', label: 'Location'},
        {key: 'source network', label: 'Source Network'},
        {key: 'apply link', label: 'Apply Link'}
        ]}
      />
      );
  }
});

module.exports = JobList;