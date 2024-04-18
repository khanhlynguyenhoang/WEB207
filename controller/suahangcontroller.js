window.suahangcontroller = function($scope,$http,$routeParams,$location){
    $scope.title = 'Sửa thông tin đặt hàng'
    $scope.tongTien = function () {
        if ($scope.inputValue.khoaHoc== "KH1") {
            $scope.inputValue.thanhTien = 2000000;
        }
        if ($scope.inputValue.khoaHoc == "KH2") {
            $scope.inputValue.thanhTien = 3000000;
        }
        if ($scope.inputValue.khoaHoc == "KH3") {
            $scope.inputValue.thanhTien = 4000000;
        }
    }
    const apiKhoaHoc = "http://localhost:3000/khoaHoc";
    let khoaHocID = $routeParams.id;
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
    $scope.suaThongTin = function () {
        let updateKhoaHoc = {
            hoTen: $scope.inputValue.hoTen,
                cccd: $scope.inputValue.cccd,
                email: $scope.inputValue.email,
                gioiTinh: $scope.inputValue.gioiTinh,
                sdt: $scope.inputValue.sdt,
                khoaHoc: $scope.inputValue.khoaHoc,
                thanhTien: $scope.inputValue.thanhTien,
                ngaySinh: $scope.inputValue.ngaySinh,
                hinhThucTT: $scope.inputValue.hinhThucTT,
        }
        $http.put(
            `${apiKhoaHoc}/${khoaHocID}`,
            updateKhoaHoc
        ).then(function(response){
            if(response.status == 200){
                alert('Sửa thông tin thành công')
            }
            $location.path('/giohang')
        });
    }
}