var React = require('react');
var mui = require('material-ui');
var LeftNav = mui.LeftNav;
var JobList = require('./JobList.jsx');
var JobStore = require('../stores/JobStore.jsx');
var Modal = require('react-modal');
var DoughnutChart = require('react-chartjs').Doughnut;

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
    return { jobs: JobStore.getJobs(), modalIsOpen: true};
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
                <h2 className="mui-font-style-headline">Candidacy Insights</h2> 
                <DoughnutChart data={chartData} width="200" height ="200"/>
              </div> 
            </Tab> 
        </Tabs>
       </Paper>    
    </div>

      );
  }
})

module.exports = JobListBox;

var charData;

var convertData = function(data){
  var i;
  var holder = {};
  for(i= 0; i<data.length; i++){
    var temp = data[i];
    // console.log(temp);
    if(!holder[temp.title]){
      holder[temp.title] = 1;
      // console.log(holder);
    } else {
      holder[temp.title] +=1;
    }
  }
  chartData = prepareData(holder);
  // console.log('data to be use', chartData);
}

var prepareData = function(obj){
  var result = [];
  for(var key in obj){
    result.push({
      'label': key,
      'value': obj[key],
      'color': colorOptions[Object.keys(obj).indexOf(key)]
    });
  }
  return result;
}

var colorOptions = ["#FF1744", "#D500F9", "#3D5AFE", "#00B0FF", "#1DE9B6", "#76FF03", "#FFEA00", "#FF9100"]


var jobResults = [
{  
   "title":"Software Engineer",
   "company":{  
      "name":"Hack Reactor",
      "location":{  
         "country":"US",
         "state":"CA",
         "city":"San Francisco"
      }
   },
   "location":{  
      "country":"US",
      "state":"CA",
      "city":"San Francisco"
   },
   "source_network":{  
      "name":"AngelList",
      "data":{  
         "temp":"/*NETWORK SPECIFIC FIELDS*/"
      }
   },
   "url":"http://angel.co/hackreactor/software_engineer",
   "apply_link":"http://hackreactor.com/apply/software_engineer",
   "favorite":true
},

{  
   "title":"Software Engineer",
   "company":{  
      "name":"Hack Reactor",
      "location":{  
         "country":"US",
         "state":"CA",
         "city":"San Francisco"
      }
   },
   "location":{  
      "country":"US",
      "state":"CA",
      "city":"Palo Alto"
   },
   "source_network":{  
      "name":"AngelList",
      "data":{  
         "temp":"/*NETWORK SPECIFIC FIELDS*/"
      }
   },
   "url":"http://angel.co/hackreactor/software_engineer",
   "apply_link":"http://hackreactor.com/apply/software_engineer",
   "favorite":true
},

{  
   "title":"DevOps Manager",
   "company":{  
      "name":"Hack Reactor",
      "location":{  
         "country":"US",
         "state":"CA",
         "city":"San Francisco"
      }
   },
   "location":{  
      "country":"US",
      "state":"CA",
      "city":"San Francisco"
   },
   "source_network":{  
      "name":"AngelList",
      "data":{  
         "temp":"/*NETWORK SPECIFIC FIELDS*/"
      }
   },
   "url":"http://angel.co/hackreactor/software_engineer",
   "apply_link":"http://hackreactor.com/apply/software_engineer",
   "favorite":true
},

{  
   "title":"Software Engineer ",
   "company":{  
      "name":"Hack Reactor",
      "location":{  
         "country":"US",
         "state":"CA",
         "city":"San Francisco"
      }
   },
   "location":{  
      "country":"US",
      "state":"CA",
      "city":"San Francisco"
   },
   "source_network":{  
      "name":"AngelList",
      "data":{  
         "temp":"/*NETWORK SPECIFIC FIELDS*/"
      }
   },
   "url":"http://angel.co/hackreactor/software_engineer",
   "apply_link":"http://hackreactor.com/apply/software_engineer",
   "favorite":true
},

{  
   "title":"Software Engineer",
   "company":{  
      "name":"Hack Reactor",
      "location":{  
         "country":"US",
         "state":"CA",
         "city":"San Francisco"
      }
   },
   "location":{  
      "country":"US",
      "state":"CA",
      "city":"San Francisco"
   },
   "source_network":{  
      "name":"AngelList",
      "data":{  
         "temp":"/*NETWORK SPECIFIC FIELDS*/"
      }
   },
   "url":"http://angel.co/hackreactor/software_engineer",
   "apply_link":"http://hackreactor.com/apply/software_engineer",
   "favorite":true
},

{  
   "title":"Front-End Engineer",
   "company":{  
      "name":"Hack Reactor",
      "location":{  
         "country":"US",
         "state":"CA",
         "city":"San Francisco"
      }
   },
   "location":{  
      "country":"US",
      "state":"CA",
      "city":"San Francisco"
   },
   "source_network":{  
      "name":"AngelList",
      "data":{  
         "temp":"/*NETWORK SPECIFIC FIELDS*/"
      }
   },
   "url":"http://angel.co/hackreactor/software_engineer",
   "apply_link":"http://hackreactor.com/apply/software_engineer",
   "favorite":true
},
];

convertData(jobResults);
