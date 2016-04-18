import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import routing from './about.routes.js';
import AboutController from './about.controller.js';

export default angular.module('app.about', [uirouter, ngResource])
  .config(routing)
  .controller('AboutController', AboutController)
  .name;
