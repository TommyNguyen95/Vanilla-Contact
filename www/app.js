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
        console.log(id);
      }
      if (e.target.className === 'backBtn'){
        this.back();
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

  showContact(){
    document.querySelector('div.wrapper').outerHTML = '';
    document.querySelector('div.wrapperContact').outerHTML = '';
    this.editContact = new EditContact();
  }

  back() {
    document.querySelector('div.editWrap').outerHTML = '';
    this.pageContent = new Pagecontent();
    this.contactList = new ContactList();
  }
}


new App().createDOM()