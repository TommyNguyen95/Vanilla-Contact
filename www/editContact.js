class EditContact {
  constructor() {
    this.editContact();
  }
  editContact() {
    let body = document.querySelector('body');

    let editWrap = document.createElement('div');
    body.append(editWrap);
    editWrap.setAttribute('class', 'editWrap');

    let editContactDiv = document.createElement('div');
    editWrap.appendChild(editContactDiv);
    editContactDiv.innerHTML;

    let backBtn = document.createElement('button');
    editContactDiv.appendChild(backBtn);
    backBtn.setAttribute('class', 'backBtn');
    backBtn.innerHTML = 'BACK';
  }
}