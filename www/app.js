class App {
  constructor() {
    store.contacts = store.contacts || []
    store.save();
  }

  createDOM() {
    this.events();
    this.pageContent = new Pagecontent();
    this.contactList = new ContactList();
  }

  events() {
    window.addEventListener('click', e => {
      if (e.target.id === 'save') {
        this.addContact();
      }
      if (e.target.id === 'emailButton') {
        this.addEmailInput();
      }
      if (e.target.id === 'phoneButton') {
        this.addPhoneInput();
      }
      if(e.target.className === 'deleteButton'){
        console.log(e);
        const target = e.target.closest('[data-contact-id]');
        const id = target.getAttribute('data-contact-id')
        this.deleteContact({ target, id });
      }
    })
  }

  addContact() {
    let nameValue = document.querySelector('[id=myName]').value;
    let phoneValue = [...document.querySelectorAll('[class=phone]')].map((node) => {
      return node.value;
    });
    let emailValue = [...document.querySelectorAll('[class=email]')].map((node) => {
      return node.value;
    })
    let contact = new Contact(nameValue, phoneValue, emailValue);
    contact.id = store.contacts.length;
    store.contacts.push(contact);
    store.save();
    console.log(this.contactList.renderContacts());
  }

  addEmailInput() {
    let emailInput = document.createElement('input');
    emailUl.append(emailInput);
    emailInput.innerHTML;
    emailInput.placeholder = 'Emailadress';
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('class', 'email');
  }

  addPhoneInput() {
    let phoneInput = document.createElement('input');
    phoneUl.append(phoneInput);
    phoneInput.innerHTML;
    phoneInput.placeholder = 'Phonenumber';
    phoneInput.setAttribute('type', 'tel');
    phoneInput.setAttribute('class', 'phone');
  }

  deleteContact({ target, id }) {
    store.contacts.splice(store.contacts.findIndex(contact => contact.id === Number(id)), 1)
    console.log('Delete contact with id: ', id);
    store.save();
    target.parentElement.removeChild(target);

  }
  // Delete existing contact
//  deleteContact(id) {
//    contacts.splice(contacts.findIndex(contact => contact.id === Number(id)), 1)
//    contacts.save()
//    document.querySelector('div.table-div').outerHT ML = ''
//    this.contacts = new Contacts()
//  }
}


new App().createDOM()