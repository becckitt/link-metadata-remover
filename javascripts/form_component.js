linkApp.controller("linkController", ['$scope', function($scope) {
  $scope.link = "";
  $scope.cleanedLink = "";
  $scope.showCleanLink = false;
  $scope.cleanLink = function() {
    if ($scope.link.length > 10 && $scope.isValidLink()) {
      $scope.cleanedLink = $scope.link.split("?")[0];
      $scope.showCleanLink = true;
    }
  }
  $scope.resetLink = function() {
    $scope.cleanedLink = "";
    $scope.showCleanLink = false;
  }
  $scope.isValidLink = function() {
    return $scope.link.match(/((http|https):\/\/|www\.)/, 'i') ? true : false;
  }
}]);