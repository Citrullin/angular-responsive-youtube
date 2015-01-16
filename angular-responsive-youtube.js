youtube_player = angular.module('citrullin.ryoutube', []);
youtube_player.directive('youtubeVideo', function(){
    return{
        restrict: 'E',
        scope: {
            code: '@code'
        },
        link: function($scope, element, attrs){
            $scope.height = Math.round((element[0].offsetWidth)/1.77777777778);
        },
        controller: function($scope, $sce){
            $scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/"+$scope.code);
        },
        template: '<iframe height="{{height}}" ng-src="{{url}}" style="width: 100%" frameborder="0" allowfullscreen></iframe>'
    }
});