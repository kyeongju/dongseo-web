

angular.module("user.service", [])
    .service("UserService", function UserService($http) {
        this.getUser= function () {
            return $http.get("user.json");
        }
    });