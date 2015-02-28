(function() {
var app;
app = angular.module("home.module")

app.controller("home.controller", [ '$scope', '$translate', "common.config", function ($scope, $translate, commonConfig) {

  commonConfig.getMainConfig().success(function (data){
    $scope.config = data;
  }).error(function(){
        alert("error");
  })

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };

}]);

}).call(this);