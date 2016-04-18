import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import routing from './meetups.routes.js';
import MeetupsController from './meetups.controller.js';

export default angular.module('app.meetups', [uirouter, ngResource])
  .config(routing)
  .controller('MeetupsController', MeetupsController)
  .name;