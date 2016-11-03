(function() {
    angular
        .module('shop')
        .factory('users', function() {

            const logIn = function(username) {
                var userData = {
                    name: username,
                    time: Date.now()
                }
                localStorage.setItem('user', JSON.stringify(userData));
                return userData;
            }

            const getUser = function() {
                if (localStorage.getItem('user')) {
                    var user = JSON.parse(localStorage.getItem('user'));
                } else {
                    var user = 'Not logged in';
                }
                return user;
            }

            const logOut = function() {
                localStorage.removeItem('user');
            }

            return {
                logIn,
                getUser,
                logOut
            }
        });
})();
