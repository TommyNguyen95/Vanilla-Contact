const body = document.querySelector('body');

//Wrapper
const createWrapper = (body) => {
    const wrapper = document.createElement('div');
    body.append(wrapper);
    wrapper.innerHTML;
    wrapper.setAttribute('id', 'wrapper');
    return wrapper;
};

const createTitle = (wrapper) => {
    //Title
    const title = document.createElement('h1');
    wrapper.append(title);
    title.innerHTML = 'Contacts';
    title.setAttribute('id', 'title');
};

const createNameInput = (wrapper) => {
    //Name div
    const nameDiv = document.createElement('div');
    wrapper.append(nameDiv);
    nameDiv.innerHTML;
    nameDiv.setAttribute('id', 'nameDiv');
    
    //Firstname
    const firstName = document.createElement('label');
    firstName.setAttribute('for', 'firstname')
    nameDiv.append(firstName);
    firstName.innerHTML = 'Firstname';
    
    const firstNameInput = document.createElement('input');
    nameDiv.append(firstNameInput);
    firstNameInput.innerHTML;
    firstNameInput.setAttribute('type', 'text');
    firstNameInput.setAttribute('id', 'firstname')
    
    //Lastname
    const lastName = document.createElement('label');
    lastName.setAttribute('for', 'lastname')
    nameDiv.append(lastName);
    lastName.innerHTML = 'Lastname';
    
    const lastNameInput = document.createElement('input');
    nameDiv.append(lastNameInput);
    lastNameInput.innerHTML;
    lastNameInput.setAttribute('type', 'text');
    lastNameInput.setAttribute('id', 'lastname')
};

const createEmailInput = (wrapper) => {
    //Email div
    const emailDiv = document.createElement('div');
    wrapper.append(emailDiv);
    emailDiv.innerHTML;
    emailDiv.setAttribute('id', 'emailDiv');
    
    //Email label
    const email = document.createElement('label');
    email.setAttribute('for', 'email')
    emailDiv.append(email);
    email.innerHTML = 'Email';
    
    const emailUl = document.createElement('ul');
    emailDiv.append(emailUl);
    emailUl.innerHTML;
    emailUl.setAttribute('id', 'emailUl');

    const addEmailButton = document.createElement('button');
    emailDiv.append(addEmailButton);
    addEmailButton.innerHTML = 'ADD';
    addEmailButton.setAttribute('id', 'emailButton');

    const addInput = () => {
        //Email input
        const emailInput = document.createElement('input');
        emailUl.append(emailInput);
        emailInput.innerHTML;
        emailInput.setAttribute('type', 'text');
        emailInput.setAttribute('class', 'email');
    }
    addInput();

    return addInput;

};

const createPhoneInput = (wrapper) => {
    //Phone div
    const phoneDiv = document.createElement('div');
    wrapper.append(phoneDiv);
    phoneDiv.innerHTML;
    phoneDiv.setAttribute('id', 'phoneDiv');
    
    //Phone
    const phone = document.createElement('label');
    phone.setAttribute('for', 'phone')
    phoneDiv.append(phone);
    phone.innerHTML = 'Phonenumber';
    
    const phoneUl = document.createElement('ul');
    phoneDiv.append(phoneUl);
    phoneUl.innerHTML;
    phoneUl.setAttribute('id', 'phoneUl');
    
    const addPhoneButton = document.createElement('button');
    phoneDiv.append(addPhoneButton);
    addPhoneButton.innerHTML = 'ADD';
    addPhoneButton.setAttribute('id', 'phoneButton');

    const addInput = () => {
        const phoneInput = document.createElement('input');
        phoneUl.append(phoneInput);
        phoneInput.innerHTML;
        phoneInput.setAttribute('type', 'tel');
        phoneInput.setAttribute('class', 'phone');
    }

    addInput();

    return addInput;

};

const createSaveButton = (wrapper) => {
    //Save button div
    const saveDiv = document.createElement('div');
    saveDiv.setAttribute('id', 'saveDiv');
    wrapper.append(saveDiv);
    saveDiv.innerHTML;
    
    //SaveBtn
    const saveBtn = document.createElement('button');
    saveDiv.append(saveBtn);
    saveBtn.innerHTML = 'Save contact';
    saveBtn.setAttribute('id', 'save')

};
 
const wrapper = createWrapper(body);
createTitle(wrapper);
createNameInput(wrapper);
const addAnotherEmailInput = createEmailInput(wrapper);
const addAnotherPhoneInput = createPhoneInput(wrapper);
createSaveButton(wrapper)










