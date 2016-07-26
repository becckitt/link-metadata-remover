linkApp.controller("linkController", ['$scope', function($scope) {
  $scope.link = "";
  $scope.cleanLink = function() {
    $scope.link = $scope.link.split("?")[0];
  }
  $scope.resetLink = function() {
    $scope.link = "";
  }
}]);