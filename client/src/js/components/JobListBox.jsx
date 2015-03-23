var React = require('react');
var mui = require('material-ui');
var JobList = require('./JobList.jsx');
var JobStore = require('../stores/JobStore.jsx');
var LeftNav = mui.LeftNav;
var DoughnutChart = require('react-chartjs').Doughnut;
var RadarChart = require('react-chartjs').Radar;
var LineChart = require('react-chartjs').Line;
var InsightStore = require('../stores/InsightStore.jsx');



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
      var menuItems = {yes: 'YES'};
    return (
      <div className="job-list-box">
      <LeftNav docked={false} menuItems={menuItems} />
        <Paper z="1">
          <Tabs> 
            <Tab label="My Jobs" > 
              <div className="tab-template-container"> 
                <h2 className="mui-font-style-headline">All Of My Added Jobs</h2>
                <JobList jobs={this.state.jobs} onEdit={this.props.onEdit} />
              </div> 
            </Tab> 
            <Tab label="My Insights" > 
              <div className="tab-template-container"> 
                <h2 className="mui-font-style-headline">Jobs Tracked by Title</h2> 
                <DoughnutChart data={InsightStore.chartData} width="200" height ="200"/>
                <RadarChart data={InsightStore.radarData} options={InsightStore.radarOptions} width="300" height="200"/>
                <LineChart data= {InsightStore.lineData} width="500" height="200"/>
              </div> 
            </Tab> 
        </Tabs>
       </Paper>    
    </div>

      );
  }
})

module.exports = JobListBox;


