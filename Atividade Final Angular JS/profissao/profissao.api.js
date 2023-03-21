(function() {
    'use strict';
    angular.module("exercicioAngularJS").factory("ProfissaoApi", function($http, config) {

        var _ProfissaoBaseUrl = config.baseUrl + "/profissao/";

        var _obterTodos = function() {
            return $http.get(_ProfissaoBaseUrl); 
        };
        var _obter = function(id) {
            return $http.get(_ProfissaoBaseUrl + id);
        };
        var _adicionar = function(profissao) {
            return $http.post(_ProfissaoBaseUrl, profissao);
        };
        var _deletar = function(profissao) {
            return $http.delete(_ProfissaoBaseUrl + profissao.id)
        };
        var _alterar = function(profissao) {
            return $http.put(_ProfissaoBaseUrl + profissao.id, profissao);
        };
        return {
            obterTodos: _obterTodos,
            obter: _obter,
            adicionar: _adicionar,
            deletar: _deletar,
            alterar: _alterar
        };
    });
})();
