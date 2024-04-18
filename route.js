let myAsm = angular.module('myAsm', ['ngRoute']);
myAsm.config(function ($routeProvider) {
    $routeProvider
        .when(
            '/trangchu',
            {
                templateUrl: 'view/trangchuview.html',
                controller: trangchucontroller
            }           
        )
        .when(
            '/dathang',
            {
                templateUrl: 'view/dathangview.html',
                controller: dathangcontroller
            }      
        )
        .when(
            '/lienhe',
            {
                templateUrl: 'view/lienheview.html',
                controller: lienhecontroller
            }         
        )
        .when(
            '/giohang',
            {
                templateUrl: 'view/giohangview.html',
                controller: giohangcontroller
            }         
        )
        .when(
            '/chitietgiohang/:id',
            {
                templateUrl: 'view/chitietgiohangview.html',
                controller: chitietgiohangcontroller
            }         
        )
        .when(
            '/suahang/:id',
            {
                templateUrl: 'view/suahangview.html',
                controller: suahangcontroller
            }         
        )
        .otherwise({
            redirectTo: '/trangchu'
        })      
})