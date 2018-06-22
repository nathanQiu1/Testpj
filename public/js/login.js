angular.module('loginApp', []).controller('loginCtrl', function ($scope) {
    
    $scope.login = function () {
        if ($scope.username == "admin" && $scope.password == "123456") {
            window.location = "/list?user=" + $scope.username;
        }
        else
        {
            $("#error").html('密码输入错误').show();
        }
    }

})


function display() {
  
    $("#error").html('').hide();
}
