function userFormController($mdDialog,userService,$translate) {

    var vm = this;
    vm.validUserForm = false;
    vm.isOpen = false;
    vm.warning = false;
    vm.user = {};
    vm.users = userService.getUser();
    vm.cancel = fnCancel;
    vm.save = fnSave;


    function fnCancel() {
        $mdDialog.cancel();
    }
    function fnSave(ev) {
        vm.warning = true;

        if (vm.userForm.$valid) {

            vm.validUserForm = true;
            userService.addUser(vm.user,vm.users);

            vm.messageStatut =$translate.instant('USER_PAGE.USER_PAGE_FORM_SAVE_OK_ALERT.CONTENT');
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title($translate.instant('USER_PAGE.USER_PAGE_FORM_SAVE_OK_ALERT.HEADER'))
                    .textContent($translate.instant('USER_PAGE.USER_PAGE_FORM_SAVE_OK_ALERT.CONTENT'))
                    .ok($translate.instant('USER_PAGE.USER_PAGE_FORM_SAVE_OK_ALERT.BUTTON'))
                    .targetEvent(ev)
            );


        }
        else {
            vm.messageStatut =  $translate.instant('USER_PAGE.USER_PAGE_FORM_SAVE_MESSAGE_ERROR');
        }
    }


}

angular.module('GalleryApp').controller('userFormController', userFormController);
