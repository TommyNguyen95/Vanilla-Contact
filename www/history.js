class History {
    constructor(contact, id) {
        this.history(contact, id);
    }
    history(contact, id) {
        contact.history.forEach((element) => {
            let wrapperHistory = document.querySelector('.wrapperHistory');

            let historyDiv = document.createElement('div');
            wrapperHistory.append(historyDiv);
            historyDiv.innerHTML;
            historyDiv.setAttribute('class', 'historyDiv');

            let historyNameDiv = document.createElement('div');
            historyDiv.append(historyNameDiv);
            historyNameDiv.setAttribute('class', 'historyNameDiv');
            historyNameDiv.innerHTML = "<span>Name</span>";

            let historyName = document.createElement('p');
            historyName.innerHTML = element.name;
            historyNameDiv.append(historyName);

            let historyEmailDiv = document.createElement('div');
            historyEmailDiv.innerHTML = "<span>Email</span>";
            historyDiv.append(historyEmailDiv);
            historyEmailDiv.setAttribute('class', 'historyEmailDiv');

            let historyPhoneDiv = document.createElement('div');
            historyPhoneDiv.innerHTML = "<span>Phone</span>";
            historyDiv.append(historyPhoneDiv);
            historyPhoneDiv.setAttribute('class', 'historyPhoneDiv');

            element.emailaddresses.map(email => {
                let historyEmailP = document.createElement('p');
                historyEmailP.setAttribute('class', 'historyEmail');
                historyEmailP.innerHTML = email;
                historyEmailDiv.append(historyEmailP);
            })

            element.phonenumbers.map(phone => {
                let historyPhoneP = document.createElement('p');
                historyPhoneP.setAttribute('class', 'historyPhone');
                historyPhoneP.innerHTML = phone;
                historyPhoneDiv.append(historyPhoneP);
            })

            let redoHistory = document.createElement('div');
            historyDiv.append(redoHistory);
            redoHistory.className = 'redoHistoryDiv';

            let redoBtn = document.createElement('button');
            redoHistory.append(redoBtn);
            redoBtn.setAttribute('class', 'redoBtn');
            redoBtn.innerHTML = 'Restore';
            
        });
    }
}