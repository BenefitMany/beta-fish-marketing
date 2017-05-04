'use strict';

export function routeConfig($urlRouterProvider, $locationProvider, $mdThemingProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);

  $mdThemingProvider.definePalette('betaFishAccentColor', $mdThemingProvider.extendPalette('orange', {
    '500': 'FF9B4A'
  }));

  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('betaFishAccentColor');
}
