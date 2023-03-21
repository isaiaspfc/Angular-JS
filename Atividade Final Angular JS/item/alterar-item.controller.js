(function() {
    'use strict';
    angular.module("exercicioAngularJS").controller("alterarItemController", function($scope, ItemApi, ItemSelecionado, Compra, $location) {

        $scope.Item = ItemSelecionado.data;
        $scope.Compras = Compra.data;
    
        $scope.Compras.forEach(function(elemento) {
            if (elemento.id === $scope.Item.Compra.id) {
                $scope.Item.Compra = elemento;
            }
        });
        $scope.alterarItem = function(ItemSelecionado) {
            ItemApi.alterar(ItemSelecionado).then(function() {
                delete $scope.Item;
                $location.path("/item/");
                obterTodos();
            });
        };
    });
})();
