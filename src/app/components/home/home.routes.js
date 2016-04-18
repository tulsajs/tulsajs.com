import templateUrl from 'home/home.html';
import header from 'layouts/header.html';
import footer from 'layouts/footer.html';

export default function routes ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('base', {
      url: '/',
      views: {
        'body@': {
          templateUrl,
          controller: 'HomeController',
          controllerAs: '$ctrl',
          bindToController: true
        },
        'header@': {
          templateUrl: header,
          controllerAs: '$ctrl',
          controller: function () {
            var vm = this;
            var nav = angular.element(document.querySelector('.nav-mobile-pull'));
            vm.openMenu = function () {
              if (nav.hasClass('fadeInRight')) {
                nav.removeClass('fadeInRight');
                nav.addClass('fadeOutRight');
              } else {
                nav.removeClass('fadeOutRight');
                nav.addClass('open fadeInRight');
              }
            };

            vm.fadeMenuOut = function () {
              nav.removeClass('fadeInRight');
              nav.addClass('fadeOutRight');
            };
          }
        },
        'footer@': {
          templateUrl: footer
        }
      }
    });
};
