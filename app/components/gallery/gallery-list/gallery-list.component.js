
(function() {
    'use strict';
    var galleryList = {
        templateUrl: './app/components/gallery/gallery-list/gallery-list.template.html',
        controller: 'galleryListController',
        controllerAs :'crtlGalleryList'
    };
    angular.module('GalleryApp').component('galleryList', galleryList);
})();
