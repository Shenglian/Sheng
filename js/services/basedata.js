/*=================================
	基本資料
	Author : Sheng
	最後更新時間 : 2015 / 02 / 13
=================================*/
app.factory('dataService', ["$q", "$http", function($q, $http){
	
	var factory = this;

	/*=========================
		回傳我的基本資料
	=========================*/
	var getMyData = function(){

		var defer = $q.defer();

		$http({
            url: "jsons/base.json",
            method: "GET",
        }).success(function (result) {

            defer.resolve(result);

        }).error(function (result, status, headers, config) {
            
            defer.resolve(false);
        });

        return defer.promise;

	}

	// 所有的 Functions
	factory.getMyData = getMyData; // 取得我的基本資料

	return factory;


}]);