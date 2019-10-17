class ContactList {
  constructor() {
    this.contactList();
    this.renderContacts();
  }
  contactList() {
    let containerContact = document.querySelector('body');

    let wrapperContact = document.createElement('div');
    containerContact.append(wrapperContact);
    wrapperContact.innerHTML;
    wrapperContact.setAttribute('id', 'wrapperContact');

    let titles = document.createElement('h1');
    wrapperContact.append(titles);
    titles.innerHTML = 'Contactlist';
    titles.setAttribute('id', 'title');
  }

  renderContacts() {
    wrapperContact.innerHTML = '';
    store.contacts.forEach((element, index) => {
      let contactDiv = document.createElement('div');
      wrapperContact.append(contactDiv);
      contactDiv.innerHTML;
      contactDiv.setAttribute('data-contact-id', element.id);
      contactDiv.setAttribute('class', 'contactDiv');

      let namesDiv = document.createElement('div');
      contactDiv.append(namesDiv);

      let contactText = document.createElement('p');
      contactText.innerHTML = ' | ' + ' ' + element.name + ' | ' + ' ' + element.phonenumbers + ' | ' + ' ' + element.emailaddresses + ' ' + ' | ';
      namesDiv.appendChild(contactText);

      let contactRemove = document.createElement('p');
      contactRemove.innerHTML = '[X]';
      contactRemove.setAttribute('class', 'deleteButton');
      contactDiv.appendChild(contactRemove);
    });
  }
}

