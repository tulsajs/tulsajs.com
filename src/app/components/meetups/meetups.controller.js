export default class MeetupsController {
  constructor (MeetupsService) {
    'ngInject';
    MeetupsService.events().$promise.then(results => {
      this.events = results.filter(result => {
        return !result.error;
      });
    });
  }
}
