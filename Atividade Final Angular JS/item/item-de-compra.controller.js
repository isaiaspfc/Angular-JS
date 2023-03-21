(function() {
    'use strict';
    angular.module("exercicioAngularJS").controller("ItemController", function($scope, ItemApi, CompraApi, Item, Compra, $location) {
        $scope.Itens = Item.data;
        $scope.Compras = Compra.data;
    
        const init = function(){
            obterTodosItem();
            obterTodosCompras();
        }

        var obterTodosItem = function() {
            ItemApi.obterTodos().then(function(){
                $scope.Itens = Item.data;
            });
        };
        $scope.adicionar = function(Item) {
            ItemApi.adicionar(Item).then(function() {
                delete $scope.Item;
                $scope.ItemForm.$setPristine();
                $location.path("/item/");
            });
        };
    
        $scope.apagarItem = function(Item) {
            ItemApi.deletar(Item).then(function() {
                obterTodos();
                $location.path("/item/");
            });
        };
    
        $scope.ordenarPor = function(campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };
    
        var obterTodosCompras = function() {
            CompraApi.obterTodos().then(function(){
                $scope.Compras = Compra.data;
            });
        };
        init();
    });
})();
