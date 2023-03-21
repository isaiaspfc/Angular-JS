(function() {
    'use strict';
    angular.module("exercicioAngularJS").controller("CompraController", function($scope, Pessoa, Compra, $location, CompraApi, PessoaApi) {
        $scope.Compras = Compra.data;
        $scope.Pessoas = Pessoa.data;
    
        const init = function(){
            obterTodosCompras();
            obterTodosPessoas();
        }

        var obterTodosCompras = function() {
            CompraApi.obterTodos().then(function(){
                $scope.Compras = Compra.data;
            });
        };
        $scope.adicionar = function(Compra) {
            CompraApi.adicionar(Compra).then(function() {
                delete $scope.Compra;
                $scope.CompraForm.$setPristine();
                $location.path("/compra/");
            });
        }; 
        $scope.apagarCompra = function(Compra) {
            CompraApi.deletar(Compra).then(function() {
                obterTodos();
                $location.path("/compra/");
            });
        };
        $scope.ordenarPor = function(campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };
        var obterTodosPessoas = function() {
            PessoaApi.obterTodos().then(function(){
                $scope.Pessoas = Pessoa.data;
            });
        };
        init();

    });
})();
