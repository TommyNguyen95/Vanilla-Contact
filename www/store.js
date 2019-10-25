let store;
try {
 store = JSON.parse(localStorage.store);
}
catch(e){
 store = {};
}
 
store.save = function(){
  console.log(this);
  localStorage.store = JSON.stringify(this);
};