var React = require('react');
var mui = require('material-ui');
var JobList = require('./JobList.jsx');
var JobStore = require('../stores/JobStore.jsx');
var DoughnutChart = require('react-chartjs').Doughnut;

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
                <JobList jobs={this.state.jobs} onEdit={this.props.onEdit} />
              </div> 
            </Tab> 
            <Tab label="My Insights" > 
              <div className="tab-template-container"> 
                <h2 className="mui-font-style-headline">Candidacy Insights</h2> 
                <DoughnutChart data={chartData} width="200" height ="200"/>
              </div> 
            </Tab> 
            <Tab label="Add or Edit Jobs" > 
              <div className="tab-template-container"> 
                <h2 className="mui-font-style-headline">Make an Edit or Add A New Job</h2> 
                <TextField hintText="Search Your Job Prospects" /> 
                  <JobList jobs={this.state.jobs} onEdit={this.props.onEdit} />
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
