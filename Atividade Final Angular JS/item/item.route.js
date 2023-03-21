(function() {
    'use strict';
    angular.module("exercicioAngularJS").config(function($routeProvider) {
        $routeProvider.when("/item", {
            templateUrl: "/item/item-de-compra.html",
            controller: "ItemController",
            resolve: {
                Item: function(ItemApi) {
                    return ItemApi.obterTodos();
                },
                Compra: function(CompraApi) {
                    return CompraApi.obterTodos();
                }
            }
        });
        $routeProvider.when("/novo-item", {
            templateUrl: "/item/novo-item.html",
            controller: "ItemController",
            resolve: {
                Compra: function(CompraApi) {
                    return CompraApi.obterTodos();
                },
                Item: function(ItemApi) {
                    return ItemApi.obterTodos();
                }
            }
        });
        $routeProvider.when("/alterar-item/:id", {
            templateUrl: "/item/alterar-item.html",
            controller: "alterarItemController",
            resolve: {
                ItemSelecionado: function(ItemApi, $route) {
                    return ItemApi.obter($route.current.params.id);
                },
                Compra: function(CompraApi) {
                    return CompraApi.obterTodos();
                }
            }
        });
    
    });
})();