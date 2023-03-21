(function() {
    'use strict';
    angular.module("exercicioAngularJS").config(function($routeProvider) {
        $routeProvider.when("/pessoa", {
            templateUrl: "/pessoa/pessoa.html",
            controller: "PessoaController",
            resolve: {
                Pessoa: function(PessoaApi) {
                    return PessoaApi.obterTodos();
                },
                Endereco: function(EnderecoApi) {
                    return EnderecoApi.obterTodos();
                },
                Profissao: function(ProfissaoApi) {
                    return ProfissaoApi.obterTodos();
                }
            }
        });
        $routeProvider.when("/nova-pessoa", {
            templateUrl: "/pessoa/nova-pessoa.html",
            controller: "PessoaController",
            resolve: {
                Pessoa: function(PessoaApi) {
                    return PessoaApi.obterTodos();
                },
                Endereco: function(EnderecoApi) {
                    return EnderecoApi.obterTodos();
                },
                Profissao: function(ProfissaoApi) {
                    return ProfissaoApi.obterTodos();
                }
            }
        });
        $routeProvider.when("/alterar-pessoa/:id", {
            templateUrl: "/pessoa/alterar-pessoa.html",
            controller: "alterarPessoaController",
            resolve: {
                PessoaSelecionada: function(PessoaApi, $route) {
                    return PessoaApi.obter($route.current.params.id);
                },
                Endereco: function(EnderecoApi) {
                    return EnderecoApi.obterTodos();
                },
                Profissao: function(ProfissaoApi) {
                    return ProfissaoApi.obterTodos();
                }
            }
        });
    });
})();
