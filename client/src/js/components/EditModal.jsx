var React = require('react');
var Modal = require('react-modal');
var mui = require('material-ui');
var JobStore = require('../stores/JobStore.jsx');

var EditModal = React.createClass({
	mixins: [
	   require('react-onclickoutside')
	],

  handleClickOutside: function(evt) {
  	this.closeModal();
  },
	getInitialState: function() {
	  return {modalIsOpen: false};
	},
	openModal: function(){
	  console.log('Modal has been opened!');
	  this.setState({modalIsOpen: true});
	},
	closeModal: function(){
	  this.setState({modalIsOpen: false});
	},
	someMethod: function() {
		return 'yeet';
	},
	render: function() {
		return (
			<Modal className="ignore-react-onclickoutside" isOpen={this.state.modalIsOpen}>
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
			  <button onClick={this.closeModal} classNam	e="waves-effect waves-light btn">Save & Close</button>
			</Modal>
		);
	}
});

module.exports = EditModal;