var Reflux = require('reflux');
var JobActions = require('../actions/jobActions.jsx');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var DropDownMenu = mui.DropDownMenu;
var FlatButton = mui.FlatButton;
var Toggle = mui.Toggle;
var Reactable = require('reactable');
var unsafe = Reactable.unsafe;
var FloatingActionButton = mui.FloatingActionButton;
var EditButton = require('../components/EditButton.jsx');

var _jobData = [
  {
   "id" : 012345,  
   "title":"Class Lead",
   "company": "Hack Reactor",
   "location": "San Francsico, CA",
   "source_network": "LinkedIn",
   "apply_link":<a className="btn-flat disabled">Applied</a>,
   "favorite": '',
   "status":  <a className="btn-flat disabled">Interview</a>,
   "date_added": "3/15/15"
},
  {
   "id" : 012346,  
   "title":"Lecturer",
   "company": "Hack Reactor",
   "location": "San Francsico, CA",
   "source_network": "LinkedIn",
   "apply_link":<a className="waves-effect waves-light btn pink">Apply</a>,
   "favorite": <i className="mdi-action-grade icon-medium" />,
   "status":  <a className="btn-flat disabled">No Response</a>,
   "date_added": "3/18/15"
},
  {
   "id" : 012346,  
   "title":"Lecturer",
   "company": "Maker Square",
   "location": "Austin, TX",
   "source_network": "LinkedIn",
   "apply_link":<a href="http://makersquare.com" className="waves-effect waves-light btn pink">Apply</a>,
   "favorite": <i className="mdi-action-grade icon-medium" />,
   "status":  <a className="btn-flat disabled">No Response</a>,
   "date_added": "3/18/15",
},

  {
   "id" : 012346,  
   "title":"Designer",
   "company": "Google",
   "location": "Mountain View, CA",
   "source_network": "LinkedIn",
   "apply_link":<a href="http://google.com" className="waves-effect waves-light btn pink">Apply</a>,
   "favorite": <i className="mdi-action-grade icon-medium" />,
   "status":  <a className="btn-flat disabled">No Response</a>,
   "date_added": "3/21/15"
},

  {
   "id" : 012346,  
   "title":"Designer",
   "company": "Google",
   "location": "Mountain View, CA",
   "source_network": "LinkedIn",
   "apply_link":<a href="http://google.com" className="waves-effect waves-light btn pink">Apply</a>,
   "favorite": <i className="mdi-action-grade icon-medium" />,
   "status":  <a className="btn-flat disabled">No Response</a>,
   "date_added": "3/21/15"
},

  {
   "id" : 012346,  
   "title":"Bike Mechanic",
   "company": "PostMates",
   "location": "San Francisco, CA",
   "source_network": "AngelList",
   "apply_link":<a href="http://google.com" className="waves-effect waves-light btn pink">Apply</a>,
   "favorite": <i className="mdi-action-grade icon-medium" />,
   "status":  <a className="btn-flat disabled">No Response</a>,
   "date_added": "3/21/15"
},

  {
   "id" : 012346,  
   "title":"Designer",
   "company": "Yahoo",
   "location": "Mountain View, CA",
   "source_network": "LinkedIn",
   "apply_link":<a href="http://google.com" className="waves-effect waves-light btn pink">Apply</a>,
   "favorite": <i className="mdi-action-grade icon-medium" />,
   "status":  <a className="btn-flat disabled">No Response</a>,
   "date_added": "3/21/15"
},

  {
   "id" : 012346,  
   "title":"Software Engineer",
   "company": "Yahoo",
   "location": "Mountain View, CA",
   "source_network": "LinkedIn",
   "apply_link":<a href="http://google.com" className="waves-effect waves-light btn pink">Apply</a>,
   "favorite": <i className="mdi-action-grade icon-medium" />,
   "status":  <a className="btn-flat disabled">No Response</a>,
   "date_added": "3/21/15"
},

  {
   "id" : 012346,  
   "title":"Designer",
   "company": "Microsoft",
   "location": "Redmond, WA",
   "source_network": "LinkedIn",
   "apply_link":<a href="http://google.com" className="waves-effect waves-light btn pink">Apply</a>,
   "favorite": <i className="mdi-action-grade icon-medium" />,
   "status":  <a className="btn-flat disabled">No Response</a>,
   "date_added": "3/21/15"
},

  {
   "id" : 012346,  
   "title":"Janitor",
   "company": "Google",
   "location": "Mountain View, CA",
   "source_network": "LinkedIn",
   "apply_link":<a className="btn-flat disabled">Applied</a>,
   "favorite": <i className="mdi-action-grade icon-medium" />,
   "status":  <a className="btn-flat disabled">No Response</a>,
   "date_added": "3/21/15"
},

  {
   "id" : 012346,  
   "title":"Supreme Boss",
   "company": "Super Startup",
   "location": "San Francisco, CA",
   "source_network": "AngelList",
   "apply_link":<a href="http://google.com" className="waves-effect waves-light btn pink">Apply</a>,
   "favorite": <i className="mdi-action-grade icon-medium" />,
   "status":  <a className="btn-flat disabled">No Response</a>,
   "date_added": "3/21/15"
},

  {
   "id" : 012346,  
   "title":"Designer",
   "company": "Apple",
   "location": "Cupertino, CA",
   "source_network": "LinkedIn",
   "apply_link":<a className="btn-flat disabled">Applied</a>,
   "favorite": <i className="mdi-action-grade icon-medium" />,
   "status":  <a className="btn-flat disabled">No Response</a>,
   "date_added": "3/19/15"
},

  {
   "id" : 012346,  
   "title":"Executive Assistant",
   "company": "Google",
   "location": "Mountain View, CA",
   "source_network": "AngelList",
   "apply_link":<a className="btn-flat disabled">Applied</a>,
   "favorite": <i className="mdi-action-grade icon-medium" />,
   "status":  <a className="btn-flat disabled">Rejected</a>,
   "date_added": "3/21/15"
},

  {
   "id" : 012346,  
   "title":"Designer",
   "company": "Google",
   "location": "Mountain View, CA",
   "source_network": "Monster",
   "apply_link":<a className="btn-flat disabled">Applied</a>,
   "favorite": <i className="mdi-action-grade icon-medium" />,
   "status":  <a className="btn-flat disabled">Offer</a>,
   "date_added": "3/21/15"
}
];

var _jobs = _jobData.map(function(jobDatum) {
  jobDatum.edit = <EditButton editData= {jobDatum}/>
  return jobDatum;
})

console.log(_jobs)

// <select className="browser-default"> <option value="" disabled selected>Choose your option</option><option value="No Response">No Response</option> <option value="Interview">Interview</option> <option value="Rejected">Rejected</option> <option value="Offer">Offer</option> <option value="Pending">Pending</option> </select>

var JobStore = Reflux.createStore({
  init: function(){
    this.load();
    this.listenTo(JobActions.loadJobs, this.load)
    this.listenTo(JobActions.createJob, this.onCreate);
    this.listenTo(JobActions.editJob, this.onEdit);
  },
  load: function(){
    var context = this;
      $.ajax({
        type: "GET",
        url: '/api/listings',
      }).done(function(data){
          console.log(data);
          _jobs = [data]; //push data to store
          context.trigger(_jobs);
      });
  },
  pushChanges: function() {
      var context = this;
      $.ajax({
        type: "POST",
        data: _jobs,
        url: '/api/listings',
      }).done(function(data){
          console.log(data);
          context.trigger(_jobs);
      });
  },
  onCreate: function(job) {
    _jobs.push(job);
    this.trigger(_jobs);
    this.pushChanges();
  },
  onEdit: function(job) {
    for (var i = 0; i < _jobs.length; i++) {
      if(_jobs[i]._id === job._id) {
        _jobs[i].mutable = job.mutable;
        this.trigger(_jobs);
        break;
      }
    }
    this.pushChanges();
  },

  getJobs: function() {
    this.load(); //req to /api/listings
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