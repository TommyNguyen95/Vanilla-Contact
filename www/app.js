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
      if (e.target.className === 'deleteButton'){
        const target = e.target.closest('[data-contact-id]');
        const id = target.getAttribute('data-contact-id')
        this.deleteContact({ target, id });
      }
      if (e.target.className === 'showContact'){
        const target = e.target.closest('[data-contact-id]');
        const id = target.getAttribute('data-contact-id')
        this.showContact({ target, id });
      }
      if (e.target.className === 'backBtn'){
        this.back();
      }
      if (e.target.className === 'saveEditBtn'){
        const target = e.target.closest('[data-contact-id]');
        const id = target.getAttribute('data-contact-id')
        this.saveEditedContact({ id });
      }
      if (e.target.className === 'emailButton'){
        this.editAddEmailInput();
      }
      if (e.target.className === 'phoneButton'){
        this.editAddPhoneInput();
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
    store.contacts.push(contact);
    store.save();
    document.querySelector('div.wrapper').outerHTML = '';
    this.pageContent = new Pagecontent();
    document.querySelector('div.wrapperContact').outerHTML = '';
    this.contactList = new ContactList();
  }

  addEmailInput() {
    let emailInput = document.createElement('input');
    emailUl.append(emailInput);
    emailInput.innerHTML;
    emailInput.placeholder = 'Emailadress';
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('class', 'email');
  }

  editAddEmailInput() {
    let emailUl = document.querySelector('[class=emailUl]');
    let emailInput = document.createElement('input');
    emailUl.append(emailInput);
    emailInput.innerHTML;
    emailInput.placeholder = 'Emailadress';
    emailInput.type = 'text'
    emailInput.className = 'editEmailInput'
  }

  addPhoneInput() {
    let phoneInput = document.createElement('input');
    phoneUl.append(phoneInput);
    phoneInput.innerHTML;
    phoneInput.placeholder = 'Phonenumber';
    phoneInput.setAttribute('type', 'tel');
    phoneInput.setAttribute('class', 'phone');
  }

  editAddPhoneInput() {
    let phoneUl = document.querySelector('[class=phoneUl]');
    let phoneInput = document.createElement('input');
    phoneUl.append(phoneInput);
    phoneInput.innerHTML;
    phoneInput.placeholder = 'Phonenumber';
    phoneInput.type = 'tel';
    phoneInput.className = 'editPhoneInput';
  }

  deleteContact({ target, id }) {
    store.contacts.splice(store.contacts.findIndex(contact => contact.id === Number(id)), 1)
    console.log('Delete contact with id: ', id);
    store.save();
    target.parentElement.removeChild(target);
  }

  showContact({ id }){
    const contactIndex = store.contacts.findIndex(contact => contact.id === Number(id));
    const contact = store.contacts[contactIndex];
    console.log('Edit contact with id: ', id);
    document.querySelector('div.wrapper').outerHTML = '';
    document.querySelector('div.wrapperContact').outerHTML = '';
    this.editContact = new EditContact(contact, id);
    this.history = new History(contact, id);
  }

  back() {
    document.querySelector('div.editWrap').outerHTML = '';
    document.querySelector('div.wrapperHistory').outerHTML = '';
    this.pageContent = new Pagecontent();
    this.contactList = new ContactList();
  }

  saveEditedContact({ id }) {
    let nameValue = document.querySelector('[class=name]').value;
    let phoneValue = [...document.querySelectorAll('[class=editPhoneInput]')].map((node) => {
      return node.value;
    });
    let emailValue = [...document.querySelectorAll('[class=editEmailInput]')].map((node) => {
      return node.value;
    })
    let editContact = new Contact(nameValue, phoneValue, emailValue);
    const contactIndex = store.contacts.findIndex(contact => contact.id === Number(id));
    const contact = store.contacts[contactIndex];
    const addToHistory = { ...contact, history: undefined };
    editContact.history.push(addToHistory);
    store.contacts.splice(contactIndex, 1, editContact);
    store.save()
    document.querySelector('div.editWrap').outerHTML = '';
    this.editContact = new EditContact();
    document.querySelector('div.wrapperHistory').outerHTML = '';
    this.history = new History();
  }
}


new App().createDOM()