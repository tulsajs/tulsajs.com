export default function routing ($urlRouterProvider, $locationProvider) {
  'ngInject';
  
  if (HTML_MODE) {
    $locationProvider.html5Mode(true).hashPrefix('!');
  } else {
    $locationProvider.html5Mode(false);
  }
  $urlRouterProvider.otherwise('/');
};
