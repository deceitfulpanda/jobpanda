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

var InsightStore = {
	colorOptions : ["rgba(255,  23, 68, 1)", "#D500F9", "#3D5AFE", "#00B0FF", "#1DE9B6", "#76FF03", "#FFEA00", "#FF9100"],
	convertData : function(data){
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
		this.chartData =  this.prepareData(holder);
		// console.log('data to be use', chartData)
	},
	prepareData : function(obj){
	 var result = [];
	 for(var key in obj){
	 	result.push({
	 		'label': key,
	 		'value': obj[key],
	 		'color': this.colorOptions[Object.keys(obj).indexOf(key)]
	 	});
	 }
	 return result;
	},
	radarData : {
	  labels: ["San Francisco", "Los Angeles", "Palo Alto", "Austin", "New York"],
	  datasets: [
	    {
	      labels: "Test Data",
	      fillColor: "rgba(0,188,212,0.2)",
	      strokeColor: "rgba(0,188,212,1)",
	      pointColor: "rgba(0,188, 212,1)",
	      pointStrokeColor: "#fff",
	      pointHighlightFill: "#fff",
	      pointHighlightStroke: "rgba(220,220,220,1)",
	      data: [9, 3, 9, 6, 3]
	    },
	    {
	      labels: "Average Data",
	      fillColor: "rgba(255,64,129, .2)",
	      strokeColor: "rgba(255, 64,129, 1)",
	      pointColor: "rgba(255, 64,129, 1)",
	      pointStrokeColor: "#fff",
	      pointHighlightFill: "#fff",
	      pointHighlightStroke: "rgba(220,220,220,1)",
	      data: [15, 5, 5, 5, 9]
	    }
	  ]
	},
	radarOptions : {
	  pointLabelFontFamily: " 'roboto' ",
	  pointDotRadius: 3,
	  pointLabelFontStyle: "bold"
	},
	lineData : {
	  labels: ["January", "February", "March", "April", "May", "June", "July"],
	  datasets: [
	    {
	      label: "Test Data",
	      fillColor: "rgba(0,188,212,0.2)",
	      strokeColor: "rgba(0,188,212,1)",
	      pointColor: "rgba(0,188,212,1)",
	      pointStrokeColor: "#fff",
	      pointHighlightFill: "#fff",
	      pointHighlightStroke: "rgba(220,220,220,1)",
	      data: [65, 59, 80, 81, 56, 55, 40]
	    },
	    {
	      label: "Comparative Data",
	      fillColor: "rgba(255,64,129, .2)",
	      strokeColor: "rgba(255, 64,129, 1)",
	      pointColor: "rgba(255, 64,129, 1)",
	      pointStrokeColor: "#fff",
	      pointHighlightFill: "#fff",
	      pointHighlightStroke: "rgba(220,220,220,1)",
	      data: [12, 10, 10, 25, 8, 11, 10]
	    }
	  ]
	},
	jobResults : [
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
	]
}

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

InsightStore.convertData(InsightStore.jobResults);

module.exports = InsightStore;