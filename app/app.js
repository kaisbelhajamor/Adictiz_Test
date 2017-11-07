angular.module('GalleryApp', ['ngMaterial', 'ngMessages','ui.router','ngCookies','pascalprecht.translate'])

.config(config);

function config($stateProvider, $urlRouterProvider,$mdAriaProvider,$translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: './languages/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
    // Enable escaping of HTML AVOID Xss Injection
    //https://angular-translate.github.io/docs/#/guide/19_security
    $translateProvider.useSanitizeValueStrategy('escapeParameters');

    $urlRouterProvider.otherwise('/about');
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: './app/views/partial-about.html'
        })
        .state('user', {
            url: '/users',
            templateUrl: './app/views/partial-user.html',
        })
        .state('gallery', {
            url: '/gallery',
            templateUrl: './app/views/partial-gallery.html'
        });
    $mdAriaProvider.disableWarnings();
}

