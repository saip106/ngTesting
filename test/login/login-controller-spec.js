(function () {
    'use strict';

    describe('Login Controller', function () {

        beforeEach(module('ngTestingApp'));

        var rootScope, deferred, scope, loginController, toastrService, loginService, state, q;
        beforeEach(inject(function  (
            $rootScope,
            $controller,
            LoginService,
            ToastrService,
            $q) {

            rootScope = $rootScope;
            scope = $rootScope.$new();
            loginService = LoginService;
            toastrService = ToastrService;
            state = jasmine.createSpyObj('$state', ['go']);
            q = $q;

            loginController = $controller('LoginController', {
                $scope: scope,
                $state: state
            });

        }));

        describe('when user enters valid credentials', function () {

            beforeEach(function () {
                //arrange
                deferred = q.defer();
                deferred.resolve();

                spyOn(loginService, 'login').andReturn(deferred.promise);
                spyOn(toastrService, 'success');
            });

            it('should show a success message', function () {
                //act
                loginController.login('guest', 'guest');
                scope.$apply();

                //assert
                expect(toastrService.success).toHaveBeenCalled();
            });

            it('should navigate the user to home page', function () {
                //act
                loginController.login('guest', 'guest');
                scope.$apply();

                expect(state.go).toHaveBeenCalledWith('home');
            });
        });

        describe('when user enters invalid credentials', function () {

            beforeEach(function () {
                //arrange
                deferred = q.defer();
                deferred.reject();

                spyOn(loginService, 'login').andReturn(deferred.promise);
                spyOn(toastrService, 'error');
            });

            it('should show an error message', function () {
                //act
                loginController.login('foo', 'bar');
                scope.$apply();

                //assert
                expect(toastrService.error).toHaveBeenCalled();
            });

            it('should not navigate the user to home page', function () {
                //act
                loginController.login('foo', 'bar');
                scope.$apply();

                expect(state.go).not.toHaveBeenCalled();
            });
        });

    });

})();
