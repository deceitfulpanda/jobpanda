var Reflux = require('reflux');
var JobActions = require('../actions/jobActions.jsx');

var _jobs = [
  { text: 'LOL', _id: '1'},
  { text: 'Company', _id: '2'},
  { text: 'Location', _id: '3'}
];

var JobStore = Reflux.createStore({
  init: function(){
    this.listenTo(JobActions.createJob, this.onCreate);
    this.listenTo(JobActions.editJob, this.onEdit);
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