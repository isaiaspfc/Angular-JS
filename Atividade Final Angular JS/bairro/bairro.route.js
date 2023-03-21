(function() {
    'use strict';
    angular.module("exercicioAngularJS").config(function($routeProvider) {
        $routeProvider.when("/bairro", {
            templateUrl: "/bairro/bairro.html",
            controller: "BairroController",
            resolve: {
                Bairro: function(BairroApi) {
                    return BairroApi.obterTodos();
                }
            }
        });
        $routeProvider.when("/novo-bairro", {
            templateUrl: "/bairro/novo-bairro.html",
            controller: "BairroController",
            resolve: {
                Bairro: function(BairroApi) {
                    return BairroApi.obterTodos();
                }
            }
        });
        $routeProvider.when("/alterar-bairro/:id", {
            templateUrl: "/bairro/alterar-bairro.html",
            controller: "alterarBairroController",
            resolve: {
                BairroSelecionado: function(BairroApi, $route) {
                    return BairroApi.obter($route.current.params.id);
                }
            }
        });
    });
})();
