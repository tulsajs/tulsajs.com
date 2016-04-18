import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import routing from './projects.routes.js';
import ProjectsController from './projects.controller.js';

export default angular.module('app.projects', [uirouter, ngResource])
  .config(routing)
  .controller('ProjectsController', ProjectsController)
  .name;
