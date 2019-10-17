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
    wrapperContact.setAttribute('class', 'wrapperContact');

    let titles = document.createElement('h1');
    wrapperContact.append(titles);
    titles.innerHTML = 'Contactlist';
    titles.setAttribute('id', 'title');
  }

  renderContacts() {
    store.contacts.forEach((element) => {
      let wrapperContact = document.querySelector('.wrapperContact');
      let contactDiv = document.createElement('div');
      wrapperContact.append(contactDiv);
      contactDiv.innerHTML;
      contactDiv.setAttribute('data-contact-id', element.id);
      contactDiv.setAttribute('class', 'contactDiv');

      let namesDiv = document.createElement('div');
      contactDiv.append(namesDiv);
      namesDiv.setAttribute('class', 'nameDiv');

      let contactName = document.createElement('p');
      contactName.innerHTML = element.name;
      namesDiv.appendChild(contactName);

      let contactEmailDiv = document.createElement('div');
      contactEmailDiv.innerHTML;
      contactDiv.appendChild(contactEmailDiv);
      contactEmailDiv.setAttribute('class', 'emailDiv');

      let contactPhoneDiv = document.createElement('div');
      contactPhoneDiv.innerHTML;
      contactDiv.appendChild(contactPhoneDiv);
      contactPhoneDiv.setAttribute('class', 'phoneDiv');
    
      element.emailaddresses.map(email => {
        let emailP = document.createElement('p')
        emailP.setAttribute('class', 'emailadress')
        emailP.innerHTML = email;
        contactEmailDiv.append(emailP)
      })

      element.phonenumbers.map(phone => {
        let phoneP = document.createElement('p')
        phoneP.setAttribute('class', 'phonenumber');
        phoneP.innerHTML = phone;
        contactPhoneDiv.append(phoneP)
      })
     
      let buttonDiv = document.createElement('div');
      contactDiv.append(buttonDiv);
      buttonDiv.setAttribute('class', 'buttonDiv');

      let showContact = document.createElement('button');
      showContact.innerHTML = 'EDIT';
      showContact.setAttribute('class', 'showContact');
      buttonDiv.appendChild(showContact);

      let contactRemove = document.createElement('button');
      contactRemove.innerHTML = 'DELETE';
      contactRemove.setAttribute('class', 'deleteButton');
      buttonDiv.appendChild(contactRemove);
    });
  }
}

