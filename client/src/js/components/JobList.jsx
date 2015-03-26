var React = require('react');
var Reactable = require('reactable');
var mui = require('material-ui');
var LeftNav = mui.LeftNav;
var Table = Reactable.Table;
var Tr = Reactable.Tr;
var unsafe = Reactable.unsafe;

var menuItems = {};
var JobList = React.createClass({
  handleClick: function() {
    console.log("eggtarts");
  },
  render: function(){
    return (
        <Table 
        className="job-table striped table" 
        data={this.props.jobs}
        sortable={true}
        filterable={['location', 'company', 'title', 'source network', 'apply link', 'favorite', 'date added', 'status']}
        columns={[
          {key: 'title', label: 'Title'},
          {key: 'company', label: 'Company'}, 
          {key: 'location', label: 'Location'},
          {key: 'date_added', label: 'Date Added'},
          {key: 'source_network', label: 'Source Network'},
          {key: 'apply_link onClick={this.handleClick}', label: 'Apply Link'},
          {key: 'status', label: 'Status'},
          {key: 'favorite', label: 'Favorite'},
          {key: 'edit', label: 'Edit / Details'}
        ]}
        />
    );
  }
});

module.exports = JobList;