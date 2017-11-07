
(function() {
    'use strict';
    var userAdd = {
        templateUrl: './app/components/user/user-add/user-add.html',
        controller: 'userAddController',
        controllerAs :'crtlUserAdd'
    };

    angular.module('GalleryApp').component('userAdd', userAdd);

})();