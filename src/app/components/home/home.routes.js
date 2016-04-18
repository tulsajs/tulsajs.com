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
              if (nav.hasClass('fadeInLeft')) {
                nav.removeClass('fadeInLeft');
                nav.addClass('fadeOutLeft');
              } else {
                nav.removeClass('fadeOutLeft');
                nav.addClass('open fadeInLeft');
              }
            };

            vm.fadeMenuOut = function () {
              nav.removeClass('fadeInLeft');
              nav.addClass('fadeOutLeft');
            };
          }
        },
        'footer@': {
          templateUrl: footer
        }
      }
    });
};
