angular.module("index-app",["searchIndex-resource"]).config ["$routeProvider", "$locationProvider", ($routeProvider, $locationProvider) ->
  $routeProvider.when "/",
    templateUrl:"partials/index-list" 
    controller: IndexController
  $locationProvider.html5Mode true
]
angular.module("searchIndex-resource",['ngResource']).factory "SearchIndex",($resource) ->
  factory "SearchIndex", ($resource) ->
    $resource "/search_indexes/:search_index_id/:action",
      search_index_id: "@id"
    ,
      update:
        method: "PUT"

IndexController = ($scope, SearchIndex) ->
  $scope.index = ->
    SearchIndex.query ((resource) ->
      console.log resource
    ), (response) ->
      console.log response
