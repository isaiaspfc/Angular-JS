(function() {
    'use strict';
    angular.module("exercicioAngularJS").controller("EnderecoController", function($scope, Endereco, Bairro, EnderecoApi, BairroApi, $location) {
        $scope.Enderecos = Endereco.data;
        $scope.Bairros = Bairro.data;

        const init = function () {
            obterTodosEnderecos();
            obterTodosBairros();
        }

        var obterTodosEnderecos = function() {
            EnderecoApi.obterTodos().then(function(){
                $scope.Enderecos = Endereco.data;
            })
        };
        $scope.adicionar = function(Endereco) {
            EnderecoApi.adicionar(Endereco).then(function() {
                delete $scope.Endereco;
                $scope.EnderecoForm.$setPristine();
                $location.path("/endereco/");
            });
        };
        $scope.apagarEnderecos = function(Endereco) {
            EnderecoApi.deletar(Endereco).then(function() {
                obterTodos();
                $location.path("/endereco/");
            });
        };
        $scope.ordenarPor = function(campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };
        var obterTodosBairros = function(){
            BairroApi.obterTodos().then(function(){
                $scope.Bairros = Bairro.data;
            });
        }
        init();
    });
})();
