let body = document.querySelector('body');

//Container
let container = document.createElement('div');
body.append(container);
container.innerHTML;
container.setAttribute('id', 'container');

//Wrapper
let wrapper = document.createElement('div');
container.append(wrapper);
wrapper.innerHTML;
wrapper.setAttribute('id', 'wrapper');

//Title
let title = document.createElement('h1');
wrapper.append(title);
title.innerHTML = 'Contacts';
title.setAttribute('id', 'title');

//Name div
let nameDiv = document.createElement('div');
wrapper.append(nameDiv);
nameDiv.innerHTML;
nameDiv.setAttribute('id', 'nameDiv');

//Firstname
let firstName = document.createElement('label');
firstName.setAttribute('for', 'firstname')
nameDiv.append(firstName);
firstName.innerHTML = 'Firstname';

let firstNameInput = document.createElement('input');
nameDiv.append(firstNameInput);
firstNameInput.innerHTML;
firstNameInput.setAttribute('type', 'text');
firstNameInput.setAttribute('id', 'firstname')

//Lastname
let lastName = document.createElement('label');
lastName.setAttribute('for', 'lastname')
nameDiv.append(lastName);
lastName.innerHTML = 'Lastname';

let lastNameInput = document.createElement('input');
nameDiv.append(lastNameInput);
lastNameInput.innerHTML;
lastNameInput.setAttribute('type', 'text');
lastNameInput.setAttribute('id', 'lastname')

//Email div
let emailDiv = document.createElement('div');
wrapper.append(emailDiv);
emailDiv.innerHTML;
emailDiv.setAttribute('id', 'emailDiv');

//Email label
let email = document.createElement('label');
email.setAttribute('for', 'email')
emailDiv.append(email);
email.innerHTML = 'Email';

let emailUl = document.createElement('ul');
emailDiv.append(emailUl);
emailUl.innerHTML;
emailUl.setAttribute('id', 'emailUl');

//Email input
let emailInput = document.createElement('input');
emailUl.append(emailInput);
emailInput.innerHTML;
emailInput.setAttribute('type', 'text');
emailInput.setAttribute('class', 'email');

let addEmailButton = document.createElement('button');
emailDiv.append(addEmailButton);
addEmailButton.innerHTML = 'ADD';
addEmailButton.setAttribute('id', 'emailButton');

//Phone div
let phoneDiv = document.createElement('div');
wrapper.append(phoneDiv);
phoneDiv.innerHTML;
phoneDiv.setAttribute('id', 'phoneDiv');

//Phone
let phone = document.createElement('label');
phone.setAttribute('for', 'phone')
phoneDiv.append(phone);
phone.innerHTML = 'Phonenumber';

let phoneUl = document.createElement('ul');
phoneDiv.append(phoneUl);
phoneUl.innerHTML;
phoneUl.setAttribute('id', 'phoneUl');

let phoneInput = document.createElement('input');
phoneUl.append(phoneInput);
phoneInput.innerHTML;
phoneInput.setAttribute('type', 'tel');
phoneInput.setAttribute('class', 'phone');

let addPhoneButton = document.createElement('button');
phoneDiv.append(addPhoneButton);
addPhoneButton.innerHTML = 'ADD';
addPhoneButton.setAttribute('id', 'phoneButton');


//Save button div
let saveDiv = document.createElement('div');
wrapper.append(saveDiv);
saveDiv.innerHTML;
saveDiv.setAttribute('id', 'saveDiv');

//SaveBtn
let saveBtn = document.createElement('button');
saveDiv.append(saveBtn);
saveBtn.innerHTML = 'Save contact';
saveBtn.setAttribute('id', 'save')