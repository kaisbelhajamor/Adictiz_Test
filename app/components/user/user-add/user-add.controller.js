
(function() {
    'use strict';
    function userAddController($mdDialog) {


        this.showAdvanced = fnShowAdvanced;
        function fnShowAdvanced(event) {
            $mdDialog.show({
                templateUrl: './app/components/user/user-add/dialog.template.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose:true
            })
        }
    }
    angular.module('GalleryApp').controller('userAddController', userAddController);

})();


