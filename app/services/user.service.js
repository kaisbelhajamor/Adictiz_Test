(function() {
    'use strict';

    angular.module('GalleryApp').service('userService',function ($cookieStore) {

           var vm = this;
        vm.getUser = fnGetUser;
        vm.deleteUser = fndelete;
        vm.addUser = fnadd;

        function fnadd(user,list) {
            list.push(user);
            $cookieStore.put('users', list);

        }

        function fnGetUser() {
            if (typeof $cookieStore.get('users') === "undefined")
             return [];
            return $cookieStore.get('users');
        }


        function fndelete (user,list) {

            angular.forEach(list, function(value, key) {
                if(list[key]==user)
                   list.splice(key, 1);
                   $cookieStore.put('users',list);
                  return;
            });
        }

    });
})();