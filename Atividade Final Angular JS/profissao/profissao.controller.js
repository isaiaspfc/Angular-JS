(function() {
    'use strict';
    angular.module("exercicioAngularJS").controller("ProfissaoController", function($scope, Profissao, $location, ProfissaoApi, config) {
        $scope.Profissoes = Profissao.data;
    
        var obterTodos = function() {
            ProfissaoApi.obterTodos().then(function(){
                $scope.Profissoes = Profissao.data;
            });
        };
        $scope.adicionar = function(Profissao) {
            ProfissaoApi.adicionar(Profissao).then(function() {
                delete $scope.Profissao;
                $scope.ProfissaoForm.$setPristine();
                $location.path("/profissao/");
            });
        }; 
        $scope.apagarProfissao = function(Profissao) {
            ProfissaoApi.deletar(Profissao).then(function() {
                obterTodos();
                $location.path("/profissao/");
            });
        };
        $scope.ordenarPor = function(campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };
        obterTodos();
    });
})();
