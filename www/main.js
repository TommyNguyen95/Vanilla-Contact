class Contact {
  constructor(firstname, lastname, phonenumbers, emailaddresses){
    this.firstname = firstname;
    this.lastname = lastname;
    this.phonenumbers = phonenumbers;
    this.emailaddresses = emailaddresses;
  }
}


window.addEventListener('click', e => {
  if(e.target.id === 'save'){
    const contactPhoneNumber = [];
    const contactEmail = [];
    const firstNameValue = document.querySelector('[id=firstname]').value;
    const lastNameValue = document.querySelector('[id=lastname]').value;
    const contactPhoneNumberValue = document.querySelector('[id=phone]').value;
    const contactEmailValue = document.querySelector('[id=email]').value;
    
    const contact = new Contact(firstNameValue, lastNameValue, contactPhoneNumberValue, contactEmailValue);
    console.log(contact);
  }
});