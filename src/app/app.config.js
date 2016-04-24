export default function routing ($urlRouterProvider, $locationProvider) {
  'ngInject';
  $locationProvider.html5Mode(HTML_MODE);
  if (HTML_MODE) {
    $locationProvider.hashPrefix('!');
  }
  $urlRouterProvider.otherwise('/');
};
