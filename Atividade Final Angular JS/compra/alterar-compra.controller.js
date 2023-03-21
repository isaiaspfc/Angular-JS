(function() {
    'use strict';
    angular.module("exercicioAngularJS").controller("alterarCompraController", function($scope, CompraApi, CompraSelecionada, Pessoas, $location) {

        $scope.Compra = CompraSelecionada.data;
        $scope.Pessoas = Pessoas.data;
    
        $scope.Pessoas.forEach(function(elemento) {
            if (elemento.id === $scope.Compra.Pessoa.id) {
                $scope.Compra.Pessoa = elemento;
            }
        });
        $scope.alterarCompra = function(CompraSelecionada) {
            CompraApi.alterar(CompraSelecionada).then(function() {
                delete $scope.Compra;
                $location.path("/compra/");
                obterTodos();
            });
        };
    });
})();
