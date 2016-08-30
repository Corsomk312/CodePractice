angular.module('flapperNews',[])
.controller('MainCtrl',[
  '$scope',
  function($scope){
    $scope.test = 'Hello worlds!';
    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 6},
      {title: 'post 3', upvotes: 14},
      {title: 'post 4', upvotes: 2},
      {title: 'post 5', upvotes: 6}
    ]

    $scope.addPost = function(){
      if(!$scope.title || $scope.title === ''){
        return;
      }
      $scope.posts.push({title: $scope.title, upvotes: 0});
      $scope.title= '';
    }
  }]);