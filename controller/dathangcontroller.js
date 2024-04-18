window.dathangcontroller = function ($scope, $http) {
    $scope.the_p1 = "ĐẶT KHÓA HỌC"
    //Hiển thị tiền
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
    $scope.datHang = function () {
        const apiKhoaHoc = "http://localhost:3000/khoaHoc";
        let flag = true;

        $scope.kiemTra = {
            hoTen: false,
            cccd: false,
            email: false,
            gioiTinh: false,
            sdt: false,
            khoaHoc: false,
            thanhTien: false,
            ngaySinh: false,
            hinhThucTT: false
        }
        if (!$scope.inputValue || !$scope.inputValue.hoTen) {
            flag = false;
            $scope.kiemTra.hoTen = true
        }
        if (!$scope.inputValue || !$scope.inputValue.cccd) {
            flag = false;
            $scope.kiemTra.cccd = true
        }
        if (!$scope.inputValue || !$scope.inputValue.email) {
            flag = false;
            $scope.kiemTra.email = true
        }
        if (!$scope.inputValue || !$scope.inputValue.gioiTinh) {
            flag = false;
            $scope.kiemTra.gioiTinh = true
        }
        if (!$scope.inputValue || !$scope.inputValue.sdt) {
            flag = false;
            $scope.kiemTra.sdt = true
        }
        if (!$scope.inputValue || !$scope.inputValue.khoaHoc) {
            flag = false;
            $scope.kiemTra.khoaHoc = true   
        }

        if (!$scope.inputValue || !$scope.inputValue.ngaySinh) {
            flag = false;
            $scope.kiemTra.ngaySinh = true
        }
        if (!$scope.inputValue || !$scope.inputValue.hinhThucTT) {
            flag = false;
            $scope.kiemTra.hinhThucTT = true
        }
        //Check email
        let regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if (!regexEmail.test($scope.inputValue.email)) {
            flag = false;
            $scope.kiemTra.email = true
        }
        //Check sdt
        let regexSdt = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (!regexSdt.test($scope.inputValue.sdt)) {
            flag = false;
            $scope.kiemTra.sdt = true
        }
         
        // console.log($scope.inputValue.thanhTien)
        if (flag) {
            let newKhoaHoc = {
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

            // console.log(newStudent);
            $http.post(
                apiKhoaHoc, //đường dẫ API
                newKhoaHoc //Dữ liệu mới nhập vào từ input
            ).then(function (response) {
                // console.log(response);
                // alert(123)
                if (response.status == 201) {
                    alert('Thêm dữ liệu thành công')
                    $location.path('#!/list');
                }
                else {
                    alert("Bạn cần nhập đầy đủ thông tin!");
                }
            });
        }
    }
}