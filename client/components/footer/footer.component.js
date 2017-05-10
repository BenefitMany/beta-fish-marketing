import angular from 'angular';

export class FooterComponent {
  $onInit() {
    this.trackSubmitEvent = () => {
      ga('send', 'event', 'Submissions', 'submission', 'Acquisition');
    };
  }
}

export default angular.module('directives.footer', [])
  .component('footer', {
    template: require('./footer.html'),
    controller: FooterComponent,
    controllerAs: '$ctrl'
  })
  .name;
