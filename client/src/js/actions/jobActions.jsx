var Reflux = require('reflux');

var JobActions = Reflux.createActions([
  'createJob',
  'editJob',
  'loadJobs'
]);


module.exports = JobActions;