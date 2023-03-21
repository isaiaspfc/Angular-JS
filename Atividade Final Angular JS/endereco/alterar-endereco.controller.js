(function() {
    'use strict';
    angular.module("exercicioAngularJS").controller("alterarEnderecoController", function($scope, EnderecoApi, EnderecoSelecionado, Bairro, $location) {

        $scope.Endereco = EnderecoSelecionado.data;
        $scope.Bairros = Bairro.data;
    
        $scope.Bairros.forEach(function(elemento) {
            if (elemento.id === $scope.Endereco.Bairro.id) {
                $scope.Endereco.Bairro = elemento;
            }
        });
        $scope.alterarEndereco = function(EnderecoSelecionado) {
            EnderecoApi.alterar(EnderecoSelecionado).then(function() {
                delete $scope.Endereco;
                $location.path("/endereco/");
                obterTodos();
            });
        };
    });
})();
