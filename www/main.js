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
    const contactPhoneNumberValue = document.querySelector('[class=phone]').value;
    const contactEmailValue = document.querySelector('[class=email]').value;
    const contact = new Contact(firstNameValue, lastNameValue, contactPhoneNumberValue, contactEmailValue);
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementsByClassName('phone').value = '';
    document.getElementsByClassName('email').value = '';
    store.create(new Date(), { contact });
    console.log(contact);
  }
  if (e.target.id === 'emailButton') {
    let emailInput = document.createElement('input');
    emailUl.append(emailInput);
    emailInput.innerHTML;
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('class', 'email');
  }
  if (e.target.id === 'phoneButton') {
    let phoneInput = document.createElement('input');
    phoneUl.append(phoneInput);
    phoneInput.innerHTML;
    phoneInput.setAttribute('type', 'tel');
    phoneInput.setAttribute('class', 'phone');
  }

});