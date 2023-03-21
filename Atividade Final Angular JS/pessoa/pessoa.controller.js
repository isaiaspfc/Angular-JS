(function() {
    'use strict';
    angular.module("exercicioAngularJS").controller("PessoaController", function($scope, Pessoa, Profissao, Endereco, $location, PessoaApi, EnderecoApi, ProfissaoApi) {
        $scope.Pessoas = Pessoa.data;
        $scope.Enderecos = Endereco.data;
        $scope.Profissoes = Profissao.data;

        const init = function(){         
            obterTodosPessoas();
            obterTodosEnderecos();
            obterTodosProfissao();
        } 
        var obterTodosPessoas = function() {
            PessoaApi.obterTodos().then(function(){
                $scope.Pessoas = Pessoa.data;
            })
        };
        $scope.adicionar = function(Pessoa) {
            PessoaApi.adicionar(Pessoa).then(function() {
                delete $scope.Pessoa;
                $scope.PessoaForm.$setPristine();
                $location.path("/pessoa/");
            });
        };
        $scope.apagarPessoa = function(Pessoa) {
            PessoaApi.deletar(Pessoa).then(function() {
                obterTodos();
                $location.path("/pessoa/");
            });
        };
        $scope.ordenarPor = function(campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        }; 
        var obterTodosEnderecos = function() {
            EnderecoApi.obterTodos().then(function(){
                $scope.Enderecos = Endereco.data;
            })
        };
        var obterTodosProfissao = function() {
            ProfissaoApi.obterTodos().then(function(){
                $scope.Profissoes = Profissao.data;
            })
        };
        init();
    });
})();
