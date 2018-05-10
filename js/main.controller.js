angular.module("TashleyApp").controller('mainController', function ($http, $location, $window, $firebaseObject) {
    var vm = this;
    var ref = firebase.database().ref();
    this.nameTest = $firebaseObject(ref);
    vm.year = new Date().getFullYear();

    vm.username = "codenametashley/codenametashley.github.io";
    $http.get("https://api.github.com/repos/" + vm.username + "?").then(function (response) {
        vm.latestupdate = new Date(response.data.pushed_at).toDateString();
    });

});