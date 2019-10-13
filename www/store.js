let store;

try {
    store = JSON.parse(localStorage.store);
}
catch(e){
    store = {};
}

store.create = function(contact){
 	localStorage.store = JSON.stringify({
        contacts: {
            ...store.contacts,
            contact
        },
        history: {
            ...store.history
        }
    })
};