import templateUrl from 'contact/contact.html';

export default function routes ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('base.contact', {
      url: 'contact',
      views: {
        'body@': {
          templateUrl,
          controller: 'ContactController',
          controllerAs: '$ctrl',
          bindToController: true
        }
      }
    });
};
