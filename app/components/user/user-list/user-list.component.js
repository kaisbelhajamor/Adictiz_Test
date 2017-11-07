

(function() {
    'use strict';
    var userList = {
        templateUrl: './app/components/user/user-list/user-list.html',
        controller: 'userListController',
        controllerAs :'vm'
    };

    angular.module('GalleryApp').component('userList', userList);

})();
