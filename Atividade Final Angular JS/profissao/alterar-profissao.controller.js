(function() {
    'use strict';
    angular.module("exercicioAngularJS").controller("alterarProfissaoController", function($scope, ProfissaoApi, ProfissaoSelecionada, $location) {

        $scope.Profissao = ProfissaoSelecionada.data;
 
        $scope.alterarProfissao = function(ProfissaoSelecionada) {
            ProfissaoApi.alterar(ProfissaoSelecionada).then(function() {
                delete $scope.Profissao;
                $location.path("/profissao/");
                obterTodos();
            });
        };
    });
})();
