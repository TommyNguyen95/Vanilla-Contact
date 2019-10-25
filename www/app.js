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
      if (e.target.className === 'redoBtn'){
        const target = e.target.closest('[data-contact-id]');
        const id = target.getAttribute('data-contact-id')
        const indexTarget = e.target.closest('[data-history-index]');
        const index = indexTarget.getAttribute('data-history-index');
        this.restoreContact({ id, index });
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
    if (nameValue === ""){
      alert('You have to fill in a name');
    }else{
      let contact = new Contact(nameValue, phoneValue, emailValue);
      store.contacts.push(contact);
      store.save();
      document.querySelector('div.wrapper').outerHTML = '';
      this.pageContent = new Pagecontent();
      document.querySelector('div.wrapperContact').outerHTML = '';
      this.contactList = new ContactList();
    }

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
    store.contacts.splice(store.contacts.findIndex(contact => contact.id === id), 1)
    store.save();
    target.parentElement.removeChild(target);
  }

  showContact({ id }){
    const contactIndex = store.contacts.findIndex(contact => contact.id === id);
    const contact = store.contacts[contactIndex];
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
    const existingContactIndex = store.contacts.findIndex(contact => contact.id === id);
    const existingContact = store.contacts[existingContactIndex];
    let editContact = new Contact(nameValue, phoneValue, emailValue, existingContact.history, id);
    const addToHistory = { ...existingContact, history: undefined };
    editContact.history.push(addToHistory);
    console.log(existingContact);
    store.contacts.splice(existingContactIndex, 1, editContact);
    store.save()
    document.querySelector('div.editWrap').outerHTML = '';
    document.querySelector('div.wrapperHistory').outerHTML = '';
    this.editContact = new EditContact(editContact, id);
    this.history = new History(editContact, id);
  }

  restoreContact({ id, index }) {  
    const existingContactIndex = store.contacts.findIndex(contact => contact.id === id);
    const existingContact = store.contacts[existingContactIndex];
    const existingContactHistory = existingContact.history[index];
    
    const restoredHistory = [...existingContact.history].map((object) => {
      return { ...object }
    });

    restoredHistory.length = index;
    let restoredContact = new Contact(existingContactHistory.name, existingContactHistory.phonenumbers, existingContactHistory.emailaddresses, restoredHistory, id);

    store.contacts.splice(existingContactIndex, 1, restoredContact);
    store.save();

    document.querySelector('div.editWrap').outerHTML = '';
    document.querySelector('div.wrapperHistory').outerHTML = '';
  
    this.editContact = new EditContact(restoredContact, id);
    this.history = new History(restoredContact, id);


  }
}