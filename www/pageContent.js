class Pagecontent {
    constructor() {
        this.template();
    }
    template() {
        const body = document.querySelector('body');

        //Wrapper
        const createWrapper = (body) => {
            const wrapper = document.createElement('div');
            body.append(wrapper);
            wrapper.innerHTML;
            wrapper.setAttribute('class', 'wrapper');
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
            const name = document.createElement('label');
            name.setAttribute('for', 'firstname')
            nameDiv.append(name);
            name.innerHTML = 'Name';

            const nameInput = document.createElement('input');
            nameDiv.append(nameInput);
            nameInput.innerHTML;
            nameInput.placeholder = 'Name';
            nameInput.setAttribute('type', 'text');
            nameInput.setAttribute('id', 'myName')
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

            const emailInput = document.createElement('input');
            emailUl.append(emailInput);
            emailInput.innerHTML;
            emailInput.placeholder = 'Emailadress';
            emailInput.setAttribute('class', 'email')

            const addEmailButton = document.createElement('button');
            emailDiv.append(addEmailButton);
            addEmailButton.innerHTML = 'ADD';
            addEmailButton.setAttribute('id', 'emailButton');

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

            const phoneInput = document.createElement('input');
            phoneUl.append(phoneInput);
            phoneInput.innerHTML;
            phoneInput.placeholder = 'Phonenumber';
            phoneInput.setAttribute('class', 'phone')

            const addPhoneButton = document.createElement('button');
            phoneDiv.append(addPhoneButton);
            addPhoneButton.innerHTML = 'ADD';
            addPhoneButton.setAttribute('id', 'phoneButton');
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
            saveBtn.innerHTML = 'CREATE CONTACT';
            saveBtn.setAttribute('id', 'save')

        };

        const wrapper = createWrapper(body);
        createTitle(wrapper);
        createNameInput(wrapper);
        createEmailInput(wrapper);
        createPhoneInput(wrapper);
        createSaveButton(wrapper)

    }
}









