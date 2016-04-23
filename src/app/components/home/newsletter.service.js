export default class NewsletterService {
  constructor ($resource) {
    'ngInject';
    var newsletterService = $resource(
      API_SERVER + '/subscribe',
      {},
      {
        'subscribeToNewsletter': {
          method: 'POST'
        }
      }
    );
    this.newsletterService = newsletterService;
    return newsletterService;
  }
};