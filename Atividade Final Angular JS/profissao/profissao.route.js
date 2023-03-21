(function() {
    'use strict';
    angular.module("exercicioAngularJS").config(function($routeProvider) {
        $routeProvider.when("/profissao", {
            templateUrl: "/profissao/profissao.html",
            controller: "ProfissaoController",
            resolve: {
                Profissao: function(ProfissaoApi) {
                    return ProfissaoApi.obterTodos();
                }
            }
        });
        $routeProvider.when("/nova-profissao", {
            templateUrl: "/profissao/nova-profissao.html",
            controller: "ProfissaoController",
            resolve: {
                Profissao: function(ProfissaoApi) {
                    return ProfissaoApi.obterTodos();
                }
            }
        });
        $routeProvider.when("/alterar-profissao/:id", {
            templateUrl: "/profissao/alterar-profissao.html",
            controller: "alterarProfissaoController",
            resolve: {
                ProfissaoSelecionada: function(ProfissaoApi, $route) {
                    return ProfissaoApi.obter($route.current.params.id);
                }
            }
        });
    });
    
})();
