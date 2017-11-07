function languageSelectController($translate) {

    var vm = this;
    vm.languages = [];
    vm.userLang = navigator.language || navigator.userLanguage;
    vm.selectedLanguage = vm.userLang;
    $translate.use(vm.selectedLanguage);
    vm.changeLanguage = fnChangeLanguage;

    function fnChangeLanguage() {
        $translate.use(vm.selectedLanguage);
    }
}

angular.module('GalleryApp').controller('languageSelectController', languageSelectController);
