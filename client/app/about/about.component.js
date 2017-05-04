import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './about.routes';

export class AboutController {

  $onInit() {
  }
}

export default angular.module('betaFishApp.about', [uiRouter])
  .config(routing)
  .component('about', {
    template: require('./about.html'),
    controller: AboutController,
    controllerAs: '$ctrl'
  })
  .name;
