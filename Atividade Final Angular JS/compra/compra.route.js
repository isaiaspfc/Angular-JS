(function() {
    'use strict';
    angular.module("exercicioAngularJS").config(function($routeProvider) {
        $routeProvider.when("/compra", {
            templateUrl: "/compra/compra.html",
            controller: "CompraController",
            resolve: {
                Compra: function(CompraApi) {
                    return CompraApi.obterTodos();
                },
                Pessoa: function(PessoaApi) {
                    return PessoaApi.obterTodos();
                }
            }
        });
        $routeProvider.when("/nova-compra", {
            templateUrl: "/compra/nova-compra.html",
            controller: "CompraController",
            resolve: {
                Compra: function(CompraApi) {
                    return CompraApi.obterTodos();
                },
                Pessoa: function(PessoaApi) {
                    return PessoaApi.obterTodos();
                }
            }
        });
        $routeProvider.when("/alterar-compra/:id", {
            templateUrl: "/compra/alterar-compra.html",
            controller: "alterarCompraController",
            resolve: {
                CompraSelecionada: function(CompraApi, $route) {
                    return CompraApi.obter($route.current.params.id);
                },
                Pessoas: function(PessoaApi) {
                    return PessoaApi.obterTodos();
                }
            }
        });
    }); 
})();
