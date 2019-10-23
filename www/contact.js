class Contact {
  constructor(name, phonenumbers = [], emailaddresses = [], history = [], id) {
    this.id = Date.now() + '';
    
    if(id !== undefined) {
      this.id = id;
    } 
    this.name = name;
    this.emailaddresses = emailaddresses;
    this.phonenumbers = phonenumbers;
    this.history = history;
  }
}
