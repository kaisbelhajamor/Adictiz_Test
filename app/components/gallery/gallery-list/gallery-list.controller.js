
(function() {
    'use strict';
    function galleryListController(galleriesService,$mdDialog) {

        var DialogGallery = this;
        DialogGallery.galleries = [];

        fnGalleries();

        function fnGalleries() {
            return  galleriesService.getGalleries().then(function (response) {
                DialogGallery.galleries = response.data;
                return DialogGallery.galleries
            });

        }
        DialogGallery.showAdvanced = fnShowAdvanced;

        function fnShowAdvanced(ev,gallery) {
            $mdDialog.show({
                locals:{dataToPass: gallery},
                controller: DialogGalleryController,
                controllerAs: 'DialogGallery',
                templateUrl: './app/components/gallery/gallery-list/dialogGallery.template.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
        }

        function DialogGalleryController($mdDialog,dataToPass) {
            var DialogGallery = this;
            DialogGallery.cancelBtn = function() {
                $mdDialog.cancel();
            };
            DialogGallery.gallery = dataToPass;

        }
    }
    angular.module('GalleryApp').controller('galleryListController', galleryListController);

})();
