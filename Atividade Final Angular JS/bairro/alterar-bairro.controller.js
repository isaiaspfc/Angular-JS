(function() {
    'use strict';
    angular.module("exercicioAngularJS").controller("alterarBairroController", function($scope, BairroApi, BairroSelecionado, $location) {
        $scope.Bairro = BairroSelecionado.data;
        $scope.alterarBairro = function(BairroSelecionado) {
            BairroApi.alterar(BairroSelecionado).then(function() {
                delete $scope.Bairro;
                $location.path("/bairro/");
                obterTodos();
            });
        };
    }); 
})();
