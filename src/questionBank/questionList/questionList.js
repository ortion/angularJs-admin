app.controller('questionListCtrl', ['$scope',
    function ($scope) {
        $scope.isAddShow=true;
        $scope.toggleClick=function(){
            $scope.isAddShow=!$scope.isAddShow
        }


    }]);