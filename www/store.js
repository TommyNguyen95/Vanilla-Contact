let store;
try {
    store = JSON.parse(localStorage.store);
}
catch(e){
    store = {};
}

store.create = function(id, contact){
 	localStorage.store = JSON.stringify({
        contacts: {
            ...store.contacts,
            [id]: contact
        },
        history: {
            ...store.history
        }
    })
};