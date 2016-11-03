(function() {
    angular
        .module('shop')
        .factory('users', function() {

            const logIn = function(username) {
                var userData = {
                    name: login.form.user,
                    time: Date.now()
                }
            return userData;
            }


            return {
                logIn
            }
        });
})();
