'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('features', {
    url: '/features',
    template: '<features></features>'
  });
}
