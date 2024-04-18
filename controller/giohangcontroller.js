window.giohangcontroller = function ($scope, $http, $routeParams) {
    $scope.title = "Khóa học đã đặt"
    const apiKhoaHoc = "http://localhost:3000/khoaHoc";
    $http.get(apiKhoaHoc).then(function (response) {
        console.log(response);
        if (response.status == 200) {
            $scope.listKhoaHoc = response.data;          
        }
    });

    $scope.deleteKhoaHoc = function (deleteID) {
        // console.log(deleteID);
        let confirm = window.confirm('Bạn có muốn xóa không?')
        if(confirm){
            $http.delete(
                `${apiKhoaHoc}/${deleteID}`
            ).then(function(response){
                if(response.status == 200){
                    alert('Bạn đã xóa thành công')
                }
            });
        }
    }
}