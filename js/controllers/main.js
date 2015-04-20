/*=================================
	Index 
	Author : Sheng
	最後更新時間 : 2015 / 02 / 13
=================================*/
app.controller('mainController',['$scope', 'dataService', function($scope, dataService){
	
	var getMyData = function(){
		dataService.getMyData().then(function(result){
			$scope.me = result;
		});
	}

	var init = function(){
		getMyData();
	}

	init();

}]);