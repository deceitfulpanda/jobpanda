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


var _jobs = [
  {
   "id" : 012345,  
   "title":"Class Lead",
   "company": "Hack Reactor",
   "location": "San Francsico, CA",
   "source_network": "LinkedIn",
   "apply_link":<RaisedButton label='Apply' linkButton={true} primary={true} target='_blank' href='http://hackreactor.com/apply/software_engineer' />,
   "favorite": <Toggle name="favorite-toggle" value="true" label="Fav" />,
   "status": <DropDownMenu menuItems={[
   { payload: '1', text: 'No Response' },
   { payload: '2', text: 'Interview' },
   { payload: '3', text: 'Rejected' },
   { payload: '4', text: 'Offer' },
   { payload: '5', text: 'Pending' },
]} />,
   "date_added": "3/15/15",
   "edit" : <FloatingActionButton iconClassName="pen" mini={true} secondary={true} />

},
  {
   "id" : 012346,  
   "title":"Dean of Admissions",
   "company": "Hack Reactor",
   "location": "San Francsico, CA",
   "date_added": "3/15/15",
   "source_network": "AngelList",
   "apply_link":<FlatButton label='Applied' linkButton={true} disabled={true} target='_blank' href='http://hackreactor.com/apply/software_engineer' />,
   "status": <DropDownMenu menuItems={[
   { payload: '1', text: 'No Response' },
   { payload: '2', text: 'Interview' },
   { payload: '3', text: 'Rejected' },
   { payload: '4', text: 'Offer' },
   { payload: '5', text: 'Pending' },
]} />,
   "favorite": <Toggle name="favorite-toggle" value="true" label="Fav" />,
   "edit" : <FloatingActionButton iconClassName="muidocs-icon-action-grade" mini={true} secondary={true} />
},
  {
   "id" : 012345,  
   "title":"Class Lead",
   "company": "Hack Reactor",
   "location": "San Francsico, CA",
   "source_network": "LinkedIn",
   "apply_link":<RaisedButton label='Apply' linkButton={true} primary={true} target='_blank' href='http://hackreactor.com/apply/software_engineer' />,
   "favorite": <Toggle name="favorite-toggle" value="true" label="Fav" />,
   "status": <DropDownMenu menuItems={[
   { payload: '1', text: 'No Response' },
   { payload: '2', text: 'Interview' },
   { payload: '3', text: 'Rejected' },
   { payload: '4', text: 'Offer' },
   { payload: '5', text: 'Pending' },
]} />,
   "date_added": "3/15/15",
   "edit" : <FloatingActionButton iconClassName="muidocs-icon-action-grade" mini={true} secondary={true}><i class="mdi-content-add"></i> </FloatingActionButton>

},

];

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
        headers: {'x-access-token': "TOKEN GOES HERE"}
      }).done(function(data){
          console.log(data);
          _jobs = [data]; //push data to store
          context.trigger(_jobs);
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