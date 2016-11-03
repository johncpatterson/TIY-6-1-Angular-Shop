(function() {
    angular
        .module('shop')
        .controller('HeaderController', function HeaderController(users) {
            let vm = this;

            let returnedUser = users.getUser();
            vm.header.user = returnedUser;

            let returnedLoginTime = users.getUser.time();
            vm.header.time = returnedLoginTime;


    });
})();
