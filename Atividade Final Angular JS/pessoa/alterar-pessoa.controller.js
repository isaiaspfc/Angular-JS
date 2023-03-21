(function() {
    'use strict';
    angular.module("exercicioAngularJS").controller("alterarPessoaController", function($scope, PessoaApi, PessoaSelecionada, Endereco, Profissao, $location) {
        $scope.Pessoa = PessoaSelecionada.data;
        $scope.Enderecos = Endereco.data;
        $scope.Profissoes = Profissao.data;
    
        $scope.Enderecos.forEach(function(elemento) {
            if (elemento.id === $scope.Pessoa.Endereco.id) {
                $scope.Pessoa.Endereco = elemento;
            }
        });
        $scope.Profissoes.forEach(function(elemento) {
            if (elemento.id === $scope.Pessoa.Profissao.id) {
                $scope.Pessoa.Profissao = elemento;
            }
        });
        $scope.alterarPessoa = function(PessoaSelecionada) {
            PessoaApi.alterar(PessoaSelecionada).then(function() {
                delete $scope.Pessoa;
                $location.path("/pessoa/");
                obterTodos();
            });
        };
    });
})();
