var React = require('react');
var mui = require('material-ui');
var LeftNav = mui.LeftNav;
var JobList = require('./JobList.jsx');
var JobStore = require('../stores/JobStore.jsx');
var Modal = require('react-modal');
var DoughnutChart = require('react-chartjs').Doughnut;
var RadarChart = require('react-chartjs').Radar;
var LineChart = require('react-chartjs').Line;
var InsightStore = require('../stores/InsightStore.jsx');



//Set Material-UI Vars
var Tabs = mui.Tabs,
    Tab = mui.Tab,
    TextField = mui.TextField,
    Paper = mui.Paper;

var appElement = document.getElementById('app');
Modal.setAppElement(appElement);
Modal.injectCSS();
var JobListBox = React.createClass({

  getInitialState: function() {
    return { jobs: JobStore.getJobs(), modalIsOpen: false};
  },
  openModal: function(){
    console.log('lol');
    this.setState({modalIsOpen: true});
  },
  closeModal: function(){
    this.setState({modalIsOpen: false});
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
      <Modal isOpen={this.state.modalIsOpen}>
        <h2>Edit Job</h2>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label for="first_name">Job Title</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label for="last_name">Company Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                Date Added:
                <input id="username" type="date" className="validate" />
              </div>
              <div className="input-field col s12">
                <input id="password" type="text" className="validate" />
                <label for="password">Location</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="text" className="validate" />
                <label for="email">Source Network</label>
              </div>
              <div className="input-field col s12">
                <input id="email" type="text" className="validate" />
                <label for="email">Status</label>
              </div>
            </div>
          </form>
          </div>
        <button onClick={this.closeModal} className="waves-effect waves-light btn">Save & Close</button>
      </Modal>
        <Paper z="1">
          <Tabs> 
            <Tab label="My Jobs" > 
              <div className="tab-template-container"> 
                <h2 className="mui-font-style-headline">All Of My Added Jobs</h2>
                <JobList jobs={this.state.jobs} onEdit={this.props.onChange} openModal={this.props.openModal} />
              </div> 
            </Tab> 
            <Tab label="My Insights" > 
              <div className="tab-template-container"> 
                <h2 className="mui-font-style-headline">Jobs Insights</h2> 
                <div>
                <div className="half">
                  <div>
                    Jobs by Title
                  </div>
                  <div>
                    <DoughnutChart data={InsightStore.chartData} width="200" height ="200"/>
                  </div>
                </div>
                  <div className="half">
                    <div>
                      Jobs by Location
                    </div>
                    <RadarChart data={InsightStore.radarData} options={InsightStore.radarOptions} width="300" height="200"/>
                  </div>
                  <div className="lineGraph">
                    <div>Jobs Tracked by Month</div>
                    <LineChart data= {InsightStore.lineData} width="500" height="200"/>
                  </div>
                  </div>
              </div>
            </Tab> 
        </Tabs>
       </Paper>    
    </div>

      );
  }
})

module.exports = JobListBox;


