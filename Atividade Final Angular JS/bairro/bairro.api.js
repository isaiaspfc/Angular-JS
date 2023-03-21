(function() {
    'use strict';
    angular.module("exercicioAngularJS").factory("BairroApi", function($http, config) {

        var _BairroBaseUrl = config.baseUrl + "/bairro/";

        var _obterTodos = function() {
            return $http.get(_BairroBaseUrl);
        };
        var _obter = function(id) {
            return $http.get(_BairroBaseUrl + id);
        };
        var _adicionar = function(bairro) {
            return $http.post(_BairroBaseUrl, bairro);
        };
        var _deletar = function(bairro) {
            return $http.delete(_BairroBaseUrl + bairro.id)
        };
        var _alterar = function(bairro) {
            return $http.put(_BairroBaseUrl + bairro.id, bairro);
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
