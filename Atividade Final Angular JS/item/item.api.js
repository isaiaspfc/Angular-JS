(function() {
    'use strict';
    angular.module("exercicioAngularJS").factory("ItemApi", function($http, config) {

        var _ItemBaseUrl = config.baseUrl + "/item/";

        var _obterTodos = function() {
            return $http.get(_ItemBaseUrl); 
        };
        var _obter = function(id) {
            return $http.get(_ItemBaseUrl + id);
        };
        var _adicionar = function(item) {
            return $http.post(_ItemBaseUrl, item);
        };
        var _deletar = function(item) {
            return $http.delete(_ItemBaseUrl + item.id)
        };
        var _alterar = function(item) {
            return $http.put(_ItemBaseUrl + item.id, item);
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
