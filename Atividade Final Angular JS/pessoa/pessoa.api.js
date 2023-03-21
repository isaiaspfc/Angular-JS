(function() {
    'use strict';
    angular.module("exercicioAngularJS").factory("PessoaApi", function($http, config) {

        var _PessoaBaseUrl = config.baseUrl + "/pessoa/";

        var _obterTodos = function() {
            return $http.get(_PessoaBaseUrl); 
        };
        var _obter = function(id) {
            return $http.get(_PessoaBaseUrl + id);
        };
        var _adicionar = function(pessoa) {
            return $http.post(_PessoaBaseUrl, pessoa);
        };
        var _deletar = function(pessoa) {
            return $http.delete(_PessoaBaseUrl + pessoa.id)
        };
        var _alterar = function(pessoa) {
            return $http.put(_PessoaBaseUrl + pessoa.id, pessoa);
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
