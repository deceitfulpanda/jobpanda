var Reflux = require('reflux');
var JobActions = require('../actions/jobActions.jsx');

var _jobs = [
  {  
   "Title":"Class Lead",
   "Company":{  
      "name":"Hack Reactor",
      "location":{  
         "country":"US",
         "state":"CA",
         "city":"San Francisco"
      }
   },
   "Location":{  
      "country":"US",
      "state":"CA",
      "city":"San Francisco"
   },
   "Source Network":{  
      "name":"LinkedIn",
      "data":{  
         "temp":"/*NETWORK SPECIFIC FIELDS*/"
      }
   },
   "URL":"http://linkedin.com/hackreactor/software_engineer",
   "Apply Link":"http://hackreactor.com/apply/software_engineer",
   "Favorite":true
},
  {  
   "Title":"Software Engineer",
   "Company":{  
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
  }
];

var JobStore = Reflux.createStore({
  init: function(){
    this.load();
    this.listenTo(JobActions.loadJobs, this.load)
    this.listenTo(JobActions.createJob, this.onCreate);
    this.listenTo(JobActions.editJob, this.onEdit);
  },
  load: function(){
      $.ajax({
        type: "GET",
        url: '/api/listings',
        headers: {'x-access-token': "TOKEN GOES HERE"}
      }).done(function(data){
          console.log(data);
          this._jobs = data; //push data to store
          this.trigger(_jobs);
      });
  },
  onCreate: function(job) {
    _jobs.push(job);

    this.trigger(_jobs);
  },
  onEdit: function(job) {
    for (var i = 0; i < _jobs.length; i++) {
      if(_jobs[i]._id === job._id) {
        _jobs[i].mutable = job.mutable;
        this.trigger(_jobs);
        break;
      }
    }
  },

  getJobs: function() {
    //req to /api/listings
    return _jobs;
  },

  getJob: function(id) {
    for (var i = 0; i < _jobs.length; i++) {
      if(_jobs._id === id) {
        return jobs[i];
      }
    }
  }
});

module.exports = JobStore;