let containerContact = document.querySelector('[id=container]');
console.log(container);

let wrapperContact = document.createElement('div');
containerContact.append(wrapperContact);
wrapperContact.innerHTML;
wrapperContact.setAttribute('id', 'wrapperContact');

let titles = document.createElement('h1');
wrapperContact.append(titles);
titles.innerHTML = 'Contacts';
titles.setAttribute('id', 'title');