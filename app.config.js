mainApp.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {

    $urlRouterProvider.when("", "/main");


    $stateProvider
        .state("main", {
            url: "/",
            templateUrl: "module/main/tpl/main.html"
            /* controller: 'controllerWelcome as ctrl' */
        })
        .state("about", {
            url: "/about",
            templateUrl: "module/about/tpl/about.html"
            /* controller: 'controllerWelcome as ctrl' */
        })
        .state("post", {
            url: "/post",
            templateUrl: "module/post/tpl/post.html"
            /* controller: 'controllerWelcome as ctrl' */
        })
        .state("contact", {
            url: "/contact",
            templateUrl: "module/contact/tpl/contact.html"
            /* controller: 'controllerWelcome as ctrl' */
        });


    $urlRouterProvider.otherwise("/");
});