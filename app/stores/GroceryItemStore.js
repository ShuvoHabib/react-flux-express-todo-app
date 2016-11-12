import dispatcher from './../dispatcher';

function groceryItemStore(){
  var items = [{
    name: "Ice Cream"
  }, {
    name: "Wafles"
  }, {
    name: "Candy",
    purchased: "true"
  }, {
    name: "Snarks"
  }];
  var listeners= [];
  function getItems(){
    return items;
  }
  function addGroceryItem (item){
    items.push(item);
    triggerListeners();
  }
  function onChange(listener) {
    listeners.push(listener);
  }
  function triggerListeners() {
    listeners.forEach((listener) => {
      listener(items);
    })
  }

  dispatcher.register((event) =>{
    var split = event.type.split(':');
    if(split[0]==='grocery-item'){
      switch(split[1]){
        case "add":
        addGroceryItem(event.payload);
        break;
      }
    }
  });
  return {
    getItems:getItems,
    onChange: onChange
  }
}

export default new groceryItemStore();