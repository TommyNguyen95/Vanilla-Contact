class Contact {
  constructor(name, phonenumbers = [], emailaddresses = [], history = []) {
    this.id = Date.now();
    this.name = name;
    this.emailaddresses = emailaddresses;
    this.phonenumbers = phonenumbers;
    this.history = history;
  }
}
