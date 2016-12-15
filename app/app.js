var newsapp=angular.module('newsapp',[]);
newsapp.controller('nwshmcntrl',function($scope,$http){
$scope.news = 'Hello this is everything ok.';
$http.get("https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=872d96bc8d274a4ca582a23d345942e6")
    .then(function(response) {
        $scope.googlnews = response.data.articles;
    });
    $http.get("https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=872d96bc8d274a4ca582a23d345942e6")
    .then(function(response) {
        $scope.natgeo = response.data.articles;
    });
    $http.get("https://newsapi.org/v1/articles?source=new-scientist&sortBy=top&apiKey=872d96bc8d274a4ca582a23d345942e6")
    .then(function(response) {
        $scope.scientist = response.data.articles;
    });
});
