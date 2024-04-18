window.chitietgiohangcontroller = function ($scope, $http, $routeParams) {
    $scope.title = 'Chi tiết khóa học đã đặt'
    // console.log($routeParams.id);    
    const apiKhoaHoc = "http://localhost:3000/khoaHoc";
    let khoaHocID = $routeParams.id;
    $scope.hienThiKh = function () {
        if ($scope.inputValue.khoaHoc == "KH1") {
            $scope.inputValue.khoaHoc = "Khóa học Marketing Online";
        }
        if ($scope.inputValue.khoaHoc == "KH2") {
            $scope.inputValue.khoaHoc = "Khóa học bán hàng Online";
        }
        if ($scope.inputValue.khoaHoc == "KH3") {
            $scope.inputValue.khoaHoc = "Khóa học Digital Marketing";
        }
    }
    $http.get(
        `${apiKhoaHoc}/${khoaHocID}`
    ).then(function (response) {
        console.log(response.data);
        if (response.status == 200) {
            $scope.inputValue = {
                id: response.data.id,
                hoTen: response.data.hoTen,
                cccd: response.data.cccd,
                email: response.data.email,
                gioiTinh: response.data.gioiTinh,
                sdt: response.data.sdt,
                khoaHoc: response.data.khoaHoc,
                thanhTien: response.data.thanhTien,
                ngaySinh: new Date(response.data.ngaySinh),
                hinhThucTT: response.data.hinhThucTT
            }

        }
    });
}