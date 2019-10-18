class EditContact {
  constructor(contact, id) {
    this.editContact(contact, id);
  }

  editContact(contact, id) {
    let body = document.querySelector('body');

    let editWrapper = document.createElement('div');
    body.appendChild(editWrapper);
    editWrapper.className = 'editWrap';
    editWrapper.setAttribute('data-contact-id', id)

    let editContactDiv = document.createElement('div');
    editWrapper.appendChild(editContactDiv);
    editContactDiv.innerHTML;
    editContactDiv.className = 'editContactDiv';

    let backBtn = document.createElement('button');
    editContactDiv.appendChild(backBtn);
    backBtn.className = 'backBtn';
    backBtn.innerHTML = 'BACK';

    let editHeader = document.createElement('h1');
    editContactDiv.appendChild(editHeader);
    editHeader.className = 'editH1';
    editHeader.innerHTML = 'EDIT CONTACT';

    let nameDiv = document.createElement('div');
    editWrapper.appendChild(nameDiv);
    nameDiv.className = 'editNameDiv';

    let nameInput = document.createElement('input');
    nameDiv.appendChild(nameInput);
    nameInput.type = 'text';
    nameInput.name = 'editName';
    nameInput.className = 'name';
    nameInput.value = contact.name;

    let emailDiv = document.createElement('div');
    editWrapper.appendChild(emailDiv);
    emailDiv.className = 'editEmailDiv';

    let emailUl = document.createElement('ul');
    emailDiv.append(emailUl);
    emailUl.innerHTML;
    emailUl.className = 'emailUl';

    contact.emailaddresses.forEach((email) => {
      let emailInput = document.createElement('input');
      emailInput.type = 'text';
      emailInput.value = email;
      emailInput.className = 'editEmailInput';
      emailUl.appendChild(emailInput);
    });

    let addEmailButton = document.createElement('button');
    emailDiv.append(addEmailButton);
    addEmailButton.innerHTML = 'ADD';
    addEmailButton.setAttribute('class', 'emailButton');


    let phoneDiv = document.createElement('div');
    editWrapper.appendChild(phoneDiv);
    phoneDiv.className = 'editEmailDiv';

    let phoneUl = document.createElement('ul');
    phoneDiv.append(phoneUl);
    phoneUl.innerHTML;
    phoneUl.className = 'phoneUl';

    contact.phonenumbers.forEach((phone) => {
      let phoneInput = document.createElement('input');
      phoneInput.type = 'tel';
      phoneInput.value = phone;
      phoneInput.className = 'editPhoneInput';
      phoneUl.appendChild(phoneInput);
    });

    let addPhoneButton = document.createElement('button');
    phoneDiv.append(addPhoneButton);
    addPhoneButton.innerHTML = 'ADD';
    addPhoneButton.setAttribute('class', 'phoneButton');

    let saveEditDiv = document.createElement('div');
    editWrapper.appendChild(saveEditDiv);
    saveEditDiv.className = 'saveEditDiv';

    let saveEditBtn = document.createElement('button');
    saveEditDiv.appendChild(saveEditBtn);
    saveEditBtn.className = 'saveEditBtn';
    saveEditBtn.innerHTML = 'SAVE EDITED CONTACT'

    let wrapperHistory = document.createElement('div');
    body.append(wrapperHistory);
    wrapperHistory.innerHTML;
    wrapperHistory.setAttribute('class', 'wrapperHistory');
    wrapperHistory.setAttribute('data-contact-id', id);

    let historyTitle = document.createElement('h1');
    wrapperHistory.append(historyTitle);
    historyTitle.innerHTML = 'Contact history';
    historyTitle.setAttribute('id', 'title');
  }
}