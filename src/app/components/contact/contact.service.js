export default class ContactService {
  constructor ($resource) {
    'ngInject';
    var contactService = $resource(
      API_SERVER + '/contact-us',
      {},
      {
        'sendContact': {
          method: 'POST'
        }
      }
    );
    this.contactService = contactService;
    return contactService;
  }
};