app.controller("ravensCtrl", function ($scope, ravensService)
{
    $scope.name = "Shlomy";
    $scope.numbers = [1,2,3,4,5];
	var promise = ravensService.getPlayers();
	promise.then(function (data)
	{
		$scope.players = data.data;
		console.log($scope.players);
	});
	$scope.addNum = function(num){
	    $scope.numbers.push(num);
	}
	$scope.removeNum = function(num){
	    var i = $scope.numbers.indexOf(parseInt(num));
	    alert(i);
	    if (i >= 0){
            console.log(i);
            $scope.numbers.splice(i, 1);
	    }
	    }
})