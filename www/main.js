class Contact {
  constructor(firstname, lastname, phonenumbers, emailaddresses) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.phonenumbers = phonenumbers;
    this.emailaddresses = emailaddresses;
  }
}

window.addEventListener('click', e => {
  if (e.target.id === 'save') {
    const firstNameValue = document.querySelector('[id=firstname]').value;
    const lastNameValue = document.querySelector('[id=lastname]').value;
    const contactPhoneNumberValue = [...document.querySelectorAll('[class=phone]')].map((node) =>{
        return node.value;
    });
    const contactEmailValue = [...document.querySelectorAll('[class=email]')].map((node) => {
        return node.value;
    })
    const contact = new Contact(firstNameValue, lastNameValue, contactPhoneNumberValue, contactEmailValue);
    store.contact;
    store.create(contact);
    window.location.reload();
  }
  if (e.target.id === 'emailButton') {
    addAnotherEmailInput();
  }
  if (e.target.id === 'phoneButton') {
    addAnotherPhoneInput();
  }
});

let personName = store.contacts.contact.firstname;
let personLastName = store.contacts.contact.lastname;
let personEmail = store.contacts.contact.emailaddresses;
let personPhoneNumber = store.contacts.contact.phonenumbers;

console.log(personName)
console.log(personLastName)
console.log(personEmail)
console.log(personPhoneNumber)
