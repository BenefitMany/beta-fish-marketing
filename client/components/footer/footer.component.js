import angular from 'angular';
import ngMaterial from 'angular-material';

export class FooterComponent {

  constructor($mdDialog) {
    this.$mdDialog = $mdDialog;
  }

  $onInit() {
    this.trackSubmitEvent = () => {
      ga('send', 'event', 'Submissions', 'submission', 'Acquisition');
    };
    this.openPrivacyPolicy = (ev) => {
      this.$mdDialog.show(
        this.$mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('Privacy Policy')
          .textContent('BetaFish collects data about your activities that does not personally or directly identify you when you visit our website, the website of entities for which we serve advertisements (our “Advertisers”), or the websites and online services where we display advertisements (“Publishers”). This information may include the content you view, the date and time that you view this content, the products you purchase, or your location information associated with your IP address. We use the information we collect to serve you more relevant advertisements (referred to as “Retargeting”). We collect information about where you saw the ads we serve you and what ads you clicked on.')
          .ariaLabel('Privacy Policy')
          .ok('Got it!')
          .targetEvent(ev)
      );
    };
  };

}

FooterComponent.$inject = ['$mdDialog'];

export default angular.module('directives.footer', [])
  .component('footer', {
    template: require('./footer.html'),
    controller: FooterComponent,
    controllerAs: '$ctrl'
  })
  .name;
