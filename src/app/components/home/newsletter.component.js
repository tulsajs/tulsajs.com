import templateUrl from 'newsletter/newsletter.html';

class controller {
  constructor (NewsletterService) {
    'ngInject';
    this.NewsletterService = NewsletterService;
  }
  signup () {
    if (this.first_name && this.last_name && this.email) {
      this.loading = true;
      this.error = '';
      this.NewsletterService.subscribeToNewsletter({
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email
      }).$promise.then(results => {
        this.error = '';
        this.success = 'submitted';
        this.loading = false;
        this.first_name = '';
        this.last_name = '';
        this.email = '';
      });
    } else {
      this.success = '';
      this.error = 'Please fill out all fields';
      this.loading = false;
    }
  }
}

export default {
  controller,
  templateUrl
};
