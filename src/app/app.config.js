export default function routing ($urlRouterProvider, $locationProvider) {
  'ngInject';
  $locationProvider.html5Mode(HTML_MODE);
  $urlRouterProvider.otherwise('/');
};
