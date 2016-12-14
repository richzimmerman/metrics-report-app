'use strict';

var myApp = angular.module('myApp',[]);

myApp.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

      // Functions used to GET data from MongoDB and Update the data in the database with a PUT request
	// $scope.northeast = [];
	// $http.get('/api/feedback').then(function(res){
	// 	$scope.northeast = res.data.feedback;
	// });

	// $scope.saveData = function(id, feedback) {
	// 	console.log(id);
	// 	console.log(feedback);
	// 	$http.put('/api/feedback/'+ id, feedback).then(function(result){
	// 		console.log(result.data.body);
	// 	});
	// };


    // Filler data due to lack of backend web hosting - Uses the same Schema used for the database in /models/feedback.js file.
  $scope.templates = [
    { "name": "North East" },
    { "name": "Some other region" },
    { "name": "Another region" }
  ];

  $scope.sites = [
    { "_id": "site1",
      "site": "Site 1",
      "feedback": {
        "item1": "",
        "item2": "",
        "item3": "",
        "item4": "",
        "item5": "",
        "item6": "",
        "item7": "",
        "item8": "",
        "item9": "",
        "item10": "",
        "item11": "",
        "item12": "",
        "item13": "",
        "item14": "",
        "item15": "",
        "item16": "",
        "item17": ""
      }
    },
    { "_id": "site2",
      "site": "Site 2",
      "feedback": {
        "item1": "",
        "item2": "",
        "item3": "",
        "item4": "",
        "item5": "",
        "item6": "",
        "item7": "",
        "item8": "",
        "item9": "",
        "item10": "",
        "item11": "",
        "item12": "",
        "item13": "",
        "item14": "",
        "item15": "",
        "item16": "",
        "item17": ""
      }
    },
    { "_id": "site3",
      "site": "Site 3",
      "feedback": {
        "item1": "",
        "item2": "",
        "item3": "",
        "item4": "",
        "item5": "",
        "item6": "",
        "item7": "",
        "item8": "",
        "item9": "",
        "item10": "",
        "item11": "",
        "item12": "",
        "item13": "",
        "item14": "",
        "item15": "",
        "item16": "",
        "item17": ""
      }
    },
    { "_id": "site4",
      "site": "Site 4",
      "feedback": {
        "item1": "",
        "item2": "",
        "item3": "",
        "item4": "",
        "item5": "",
        "item6": "",
        "item7": "",
        "item8": "",
        "item9": "",
        "item10": "",
        "item11": "",
        "item12": "",
        "item13": "",
        "item14": "",
        "item15": "",
        "item16": "",
        "item17": ""
      }
    },
    { "_id": "site5",
      "site": "Site 5",
      "feedback": {
        "item1": "",
        "item2": "",
        "item3": "",
        "item4": "",
        "item5": "",
        "item6": "",
        "item7": "",
        "item8": "",
        "item9": "",
        "item10": "",
        "item11": "",
        "item12": "",
        "item13": "",
        "item14": "",
        "item15": "",
        "item16": "",
        "item17": ""
      }
    }
  ];
	
}]).directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
 
                event.preventDefault();
            }
        });
    };
});


