(function() {
    'use strict';
    angular.module("exercicioAngularJS").controller("BairroController", function($scope, Bairro, BairroApi, $location) {
        $scope.Bairros = Bairro.data;
    
        var obterTodos = function(){
            BairroApi.obterTodos().then(function(){
                $scope.Bairros = Bairro.data;
            });
        }
        $scope.adicionar = function(Bairro) {
            BairroApi.adicionar(Bairro).then(function() {
                delete $scope.Bairro;
                $scope.BairroForm.$setPristine();
                $location.path("/bairro/");
            });
        };
        $scope.apagarBairros = function(Bairro) {
            BairroApi.deletar(Bairro).then(function() {
                obterTodos();
                $location.path("/bairro/");
            });
        };
        $scope.ordenarPor = function(campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };
        obterTodos();
    });
})();
