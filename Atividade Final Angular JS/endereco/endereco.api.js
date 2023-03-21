(function() {
    'use strict';
    angular.module("exercicioAngularJS").factory("EnderecoApi", function($http, config) {

        var _EnderecoBaseUrl = config.baseUrl + "/endereco/";

        var _obterTodos = function() {
            return $http.get(_EnderecoBaseUrl);
        };
        var _obter = function(id) {
            return $http.get(_EnderecoBaseUrl + id);
        };
        var _adicionar = function(endereco) {
            return $http.post(_EnderecoBaseUrl, endereco);
        };
        var _deletar = function(endereco) {
            return $http.delete(_EnderecoBaseUrl + endereco.id)
        };
        var _alterar = function(endereco) {
            return $http.put(_EnderecoBaseUrl + endereco.id, endereco);
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
