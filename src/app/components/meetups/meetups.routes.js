import templateUrl from 'meetups/meetups.html';

export default function routes ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('base.meetups', {
      url: 'meetups',
      views: {
        'body@': {
          templateUrl,
          controller: 'MeetupsController',
          controllerAs: '$ctrl',
          bindToController: true
        }
      }
    });
};
