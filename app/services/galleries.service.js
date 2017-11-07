(function() {
    'use strict';

    angular.module('GalleryApp').service('galleriesService',function ($http) {
    this.getGalleries = fnGallery;

    function fnGallery() {
        return $http.get('./app/files/galleries.json');
    }
});
})();