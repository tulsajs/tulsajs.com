export default class MeetupsService {
  constructor ($resource) {
    'ngInject';
    var meetupsService = $resource(
      API_SERVER + '/events',
      {},
      {
        'events': {
          method: 'GET',
          isArray: true
        },
        'nextEvent': {
          method: 'GET',
          url: API_SERVER + '/next-event'
        }
      }
    );
    this.meetupsService = meetupsService;
    return meetupsService;
  }
};