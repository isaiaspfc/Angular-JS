(function() {
    'use strict';
    angular.module("exercicioAngularJS").factory("CompraApi", function($http, config) {
        
        var _CompraBaseUrl = config.baseUrl + "/compra/";

        var _obterTodos = function() {
            return $http.get(_CompraBaseUrl);
        };
        var _obter = function(id) {
            return $http.get(_CompraBaseUrl + id);
        };
        var _adicionar = function(compra) {
            return $http.post(_CompraBaseUrl, compra);
        };
        var _deletar = function(compra) {
            return $http.delete(_CompraBaseUrl + compra.id)
        };
        var _alterar = function(compra) {
            return $http.put(_CompraBaseUrl + compra.id, compra);
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
