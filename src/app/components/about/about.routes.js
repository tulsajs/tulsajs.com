import templateUrl from 'about/about.html';

export default function routes ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('base.about', {
      url: 'about',
      views: {
        'body@': {
          templateUrl,
          controller: 'AboutController',
          controllerAs: '$ctrl',
          bindToController: true
        }
      }
    });
};
