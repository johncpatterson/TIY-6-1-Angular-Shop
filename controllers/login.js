(function() {
    angular
        .module('shop')
        .controller('LoginController', function LoginController(users) {
            let vm = this;

            vm.submit = function(anotherTaco) {
                vm.user = users.logIn(anotherTaco);
                vm.form = {};
            }

            let returnedUser = users.getUser();
            vm.user = returnedUser;

            

        });


})();
