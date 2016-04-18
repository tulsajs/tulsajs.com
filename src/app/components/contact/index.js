import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import routing from './contact.routes.js';
import ContactController from './contact.controller.js';

export default angular.module('app.contact', [uirouter, ngResource])
  .config(routing)
  .controller('ContactController', ContactController)
  .name;
