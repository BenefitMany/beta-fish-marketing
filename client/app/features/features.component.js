import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './features.routes';

export class FeaturesController {

  $onInit() {
  }
}

export default angular.module('betaFishApp.features', [uiRouter])
  .config(routing)
  .component('features', {
    template: require('./features.html'),
    controller: FeaturesController,
    controllerAs: '$ctrl'
  })
  .name;
