export default class ContactController {
  constructor (ContactService) {
    'ngInject';

    this.ContactService = ContactService;
  }

  sendContact () {
    if (this.email && this.name && this.message) {
      this.ContactService.sendContact({email: this.email, name: this.name, message: this.message})
        .$promise
        .then(results => {
          if (results.success) {
            this.email = '';
            this.name = '';
            this.message = '';
            this.success = 'Message Sent Successfully!';
            this.error = '';
          } else {
            this.success = '';
            this.error = 'Problems Sending Contact Form! Please Try Again';
          }
        }, error => {
          this.success = '';
          this.error = 'Problems Sending Contact Form! Please Try Again';
        });
    } else {
      this.success = '';
      this.error = 'Please fill out all fields.';
    }
  }
}
