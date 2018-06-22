


angular.module('mylist', ["xeditable"]).controller('listCtrl', function ($scope) {

    $.ajax({
        url: "/getlist",
        type: "GET",
        async: false,
        success: function (res) {
            //$("#result").val(JSON.stringify(res.data));
            $scope.Em_books = res.data;
           
        }
    });
   

    $scope.save = function (Em_book, ID) {
       
        $.ajax({
            url: "/save?Id=" + ID + "&data=" + JSON.stringify(Em_book),
            type: "GET",
            async: false,
            success: function (res) {
                if (res) {
                    alert("操作成功");
                }

            }
        });
        angular.extend(Em_book);
    };
    $scope.remove = function (ID, index) {
        $.ajax({
            url: "/remove?Id=" + ID ,
            type: "GET",
            async: false,
            success: function (res) {
                if (res) {
                    alert("操作成功");
                }

            }
        });
        $scope.Em_books.splice(index, 1);
      
    };

    $scope.checkName = function (data) {
        if (data.toString() == '') {
            
            return "不能为空!";
        }

    };

    $scope.Add = function () {
        $scope.inserted  = {
            Name: '',
            WZURL: '',
            FMURL: '',
            CTime: '',
            ReadPP: '',
            ClickPP: '',
            Remarks: '',
            IncreaseID:''
        };
        $scope.Em_books.push($scope.inserted);


    };




})