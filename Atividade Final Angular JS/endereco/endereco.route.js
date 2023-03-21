(function() {
    'use strict';
    angular.module("exercicioAngularJS").config(function($routeProvider) {
        
        $routeProvider.when("/endereco", {
            templateUrl: "/endereco/endereco.html",
            controller: "EnderecoController",
            resolve: {
                Endereco: function(EnderecoApi) {
                    return EnderecoApi.obterTodos();
                },
                Bairro: function(BairroApi) {
                    return BairroApi.obterTodos();
                }
            }
        });
        $routeProvider.when("/novo-endereco", {
            templateUrl: "/endereco/novo-endereco.html",
            controller: "EnderecoController",
            resolve: {
                Endereco: function(EnderecoApi) {
                    return EnderecoApi.obterTodos();
                },
                Bairro: function(BairroApi) {
                    return BairroApi.obterTodos();
                }
            }
        });
        $routeProvider.when("/alterar-endereco/:id", {
            templateUrl: "/endereco/alterar-endereco.html",
            controller: "alterarEnderecoController",
            resolve: {
                EnderecoSelecionado: function(EnderecoApi, $route) {
                    return EnderecoApi.obter($route.current.params.id);
                },
                Bairro: function(BairroApi) {
                    return BairroApi.obterTodos();
                }
            }
        });
    });
})();