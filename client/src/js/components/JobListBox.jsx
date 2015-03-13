var React = require('react');
var mui = require('material-ui');
var JobList = require('./JobList.jsx');
var JobStore = require('../stores/JobStore.jsx');

//Set Material-UI Vars
var Tabs = mui.Tabs,
    Tab = mui.Tab,
    TextField = mui.TextField,
    Paper = mui.Paper;

var JobListBox = React.createClass({
  getInitialState: function() {
    return { jobs: JobStore.getJobs() };
  },
  onChange: function(jobs) {
    this.setState({
      jobs: jobs
    });
  },
  componentDidMount: function() {
    this.unsuscribe = JobStore.listen(this.onChange);
  },
  componentWillUnmount: function() {
    this.unsuscribe();
  },
  render: function() {
    return (
      <div className="job-list-box">
        <Paper z="1">
          <Tabs> 
            <Tab label="My Jobs" > 
              <div className="tab-template-container"> 
                <h2 className="mui-font-style-headline">All Of My Added Jobs</h2>
                <TextField hintText="Search Your Job Prospects" /> 
                <JobList ref="jobList" jobs={this.state.jobs} onEdit={this.props.onEdit} />
              </div> 
            </Tab> 
            <Tab label="My Insights" > 
              <div className="tab-template-container"> 
                <h2 className="mui-font-style-headline">Candidacy Insights</h2> 
                <p> 
                  Charts and Data
                </p> 
              </div> 
            </Tab> 
            <Tab label="Add or Edit Jobs" > 
              <div className="tab-template-container"> 
                <h2 className="mui-font-style-headline">Make an Edit or Add A New Job</h2> 
                <TextField hintText="Search Your Job Prospects" /> 
                  <JobList ref="jobList" jobs={this.state.jobs} onEdit={this.props.onEdit} />
              </div>
            </Tab>
        </Tabs>
       </Paper>   
    </div>

      );
  }
})

module.exports = JobListBox;