import templateUrl from 'projects/projects.html';

export default function routes ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('base.projects', {
      url: 'projects',
      views: {
        'body@': {
          templateUrl,
          controller: 'ProjectsController',
          controllerAs: '$ctrl',
          bindToController: true
        }
      }
    });
};
