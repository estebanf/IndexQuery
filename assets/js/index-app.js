  angular.module("index-app", ["searchIndex-resource"]).config([
    "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
      $routeProvider.
        when("/", {
          templateUrl: "partials/index-list",
          controller: IndexController
        }).
        when("/new", {
          templateUrl: "partials/index-create",
          controller: IndexController
        });
      return $locationProvider.html5Mode(true);
    }
  ]);

  angular.module("searchIndex-resource", ['ngResource']).factory("SearchIndex", function($resource) {
    return $resource("/search_indexes/:search_index_id/:action", {
      search_index_id: "@id"
    }, {
      update: {
        method: "PUT"
      }
    });
  });

  IndexController = function($scope, SearchIndex) {
    $scope.indexes = SearchIndex.query();
  };
