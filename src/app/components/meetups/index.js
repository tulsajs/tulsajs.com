import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import routing from './meetups.routes.js';
import MeetupsController from './meetups.controller.js';
import MeetupsService from './meetups.service.js';

export default angular.module('app.meetups', [uirouter, ngResource])
  .config(routing)
  .service('MeetupsService', MeetupsService)
  .controller('MeetupsController', MeetupsController)
  .config(['$sceProvider', function ($sceProvider) {
    $sceProvider.enabled(false);
  }])
  .name;
