import '../style/app.scss';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from './components/home';
import about from './components/about';
import meetups from './components/meetups';
import projects from './components/projects';
import contact from './components/contact';
import FastClick from 'fastclick';
FastClick.attach(document.body);

angular.module('app', [uirouter, home, about, meetups, projects, contact])
  .config(routing)
  .run(['$transitions', scrollTop]);

function scrollTop ($transitions) {
  $transitions.onSuccess({}, function () {
    scrollToTop(100);
  });
}

function scrollToTop (scrollDuration) {
  var scrollStep = -window.scrollY / (scrollDuration / 15);
  var scrollInterval = setInterval(function () {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

