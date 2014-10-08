(function () {
    'use strict';

    angular.module('ngTestingApp')
        .factory('ToastrService', function () {
            return {
                success: toastr.success,
                error: toastr.error,
                info: toastr.info
            }
        });
})();
