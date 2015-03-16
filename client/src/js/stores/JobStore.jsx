var Reflux = require('reflux');
var JobActions = require('../actions/jobActions.jsx');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var FlatButton = mui.FlatButton;
var Toggle = mui.Toggle;
var Reactable = require('reactable');
var unsafe = Reactable.unsafe;

var _jobs = [
  {
   "id" : 012345,  
   "title":"Class Lead",
   "company": "Hack Reactor",
   "location": "San Francsico, CA",
   "source network": "LinkedIn",
   "apply link":<RaisedButton label='Apply' linkButton={true} primary={true} target='_blank' href='http://hackreactor.com/apply/software_engineer' />,
   "favorite": <Toggle name="favorite-toggle" value="true" label="Fav" />,
   "status": <div className="status">
               <Toggle name="interview-toggle" label="Interview" />
               <Toggle name="rejected-toggle"  label="Rejected" />
               <Toggle name="offer-toggle"  label="Offer" />
             </div>,
  "date added": "3/15/15"

},
  {
   "id" : 012346,  
   "title":"Dean of Admissions",
   "company": "Hack Reactor",
   "location": "San Francsico, CA",
   "source network": "AngelList",
   "apply link":<FlatButton label='Applied' linkButton={true} disabled={true} target='_blank' href='http://hackreactor.com/apply/software_engineer' />,
   "favorite": <Toggle name="favorite-toggle" value="true" label="Fav" />,
   "status": <div className="status">
               <Toggle name="interview-toggle" label="Interview" />
               <Toggle name="rejected-toggle"  label="Rejected" />
               <Toggle name="offer-toggle"  label="Offer" />
             </div>,
  "date added": "3/15/15"

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
  toggle: function(e, toggled, job){
    console.log(e, toggled, job);

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