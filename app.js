/**
 * Created by imac04 on 2017-01-14.
 */
angular.module("sample",["ngRoute","user.service","user.controller"])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home',{
                templateUrl : "home/home.tmpl.html",
                controller : "mainCtrl"
            })
            .when('/user',{
                templateUrl : "user/user.tmpl.html",
                controller : "userCtrl"
            })
            .otherwise({
                redirectTo:"/home"
            });
    })
    .run(function () {
        console.log("App started.");
    })

    .controller("mainCtrl",function ($scope) {

    });



/*$(function () {
    var nameEI=$("from input#name");
    var askBtnEl=$("#ask-btn");
    var agePanelEl=$("#age");

    function getAge(name) {
        $.ajax({
            url:"user.json",
            type:"GET",
            contentType:"application/json",
            success:function (data) {
                var foundUser = {};
                data.data.forEach(function (user) {
                    if(user.name===name)
                        foundUser=user;
                    console.log(user);

                });
                if(foundUser.age) agePanelEl.text(foundUser.age);
                else agePanelEl.text("no");
            }
        })
        agePanelEl.text("28");
    }

    askBtnEl.on("click",function (e) {
        var name = nameEI.val();
        getAge(name);
        e.preventDefault();
    });

});*/
