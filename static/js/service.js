app.service("ravensService", function ($http, $q)
{
	var deferred = $q.defer();
	/*
	$http.get('static/json/players.json').then(function (data)
	{
		deferred.resolve(data);
	});
	*/
	$http({
    url: '/getPlayers',
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
}).then(function(data){
    deferred.resolve(data);

});

	this.getPlayers = function ()
	{
		return deferred.promise;
	}
})