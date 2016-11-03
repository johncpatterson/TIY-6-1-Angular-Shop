(function() {
    angular
        .module('shop')
        .controller('StockController', function StockController(storage) {
            let vm = this;
            vm.tax = .0575;

            vm.figureSalesTax = function(price, discount) {
                let subTotal = price - discount;
                let tax = subTotal * vm.tax;
                let total = subTotal + tax;
                return total;
            };

            vm.submit = function(taco) {
                vm.items = storage.saveItems(taco);
                vm.form = {};
            }

            let returnedStorage = storage.getItems();
            vm.items = returnedStorage;
        })


})();
