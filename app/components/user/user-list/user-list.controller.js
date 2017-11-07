(function () {
    'use strict';
    function userListController(userService, $scope, $cookieStore) {

        var crtlUserList = this;
        crtlUserList.users = userService.getUser();
        crtlUserList.deleteUser = deleteUsr;
        function deleteUsr(data) {
            userService.deleteUser(data, crtlUserList.users);

        }

        $scope.$watch(function () {
            return $cookieStore.get('users');
        }, function () {
            crtlUserList.users = userService.getUser();
        }, true);
    }
    angular.module('GalleryApp').controller('userListController', userListController);

})();
