var React = require('react');
var mui = require('material-ui');
var Modal = require('react-modal');
var DoughnutChart = require('react-chartjs').Doughnut;
var RadarChart = require('react-chartjs').Radar;
var LineChart = require('react-chartjs').Line;
var InsightStore = require('../stores/InsightStore.jsx');

var Insight = React.createClass({
	render: function() {
		return (
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
		);
	}
});

module.exports = Insight;
