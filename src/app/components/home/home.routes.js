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
            var blackout = angular.element(document.querySelector('.blackout'));
            vm.openMenu = function () {
              if (nav.hasClass('fadeInLeft')) {
                nav.removeClass('fadeInLeft');
                nav.addClass('fadeOutLeft');
                blackout.removeClass('display-blackout');
              } else {
                nav.removeClass('fadeOutLeft');
                nav.addClass('open fadeInLeft');
                blackout.addClass('display-blackout');
              }
            };

            vm.fadeMenuOut = function () {
              nav.removeClass('fadeInLeft');
              nav.addClass('fadeOutLeft');
              blackout.removeClass('display-blackout');
            };
          }
        },
        'footer@': {
          templateUrl: footer
        }
      }
    });
};
