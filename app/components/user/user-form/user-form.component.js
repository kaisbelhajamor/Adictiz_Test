
(function() {
    'use strict';
    var userForm = {
        templateUrl: './app/components/user/user-form/user-form.html',
        controller: 'userFormController',
        controllerAs :'vm'
    };

    angular.module('GalleryApp').component('userForm', userForm);

})();