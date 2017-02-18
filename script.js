var item1 = {name: "Avocados", price: 2.49};
var item2 = {name: "Almond Milk", price: 4.99};
var item3 = {name: "Granola", price: 5.49};
var item4 = {name: "Greek Yogurt", price: 1.25};

var list = [item1, item2, item3, item4];

function runList() {
  for (var i=0; i<list.length; i++) {
    var shoppingItem = document.createElement('div');
    shoppingItem.innerHTML=list[i].name+": $"+list[i].price;
    document.body.appendChild(shoppingItem);
  }
}

function runTotal() {
  var totalCost=0;

  for (var i=0; i<list.length; i++) {
    totalCost = totalCost + list[i].price;
  }

  var listTotal = document.createElement('div');
  listTotal.innerHTML = "Total: $"+totalCost;
  document.body.appendChild(listTotal);
}

runList();
runTotal();

function addItem(){
  var newItem = new Object();
  newItem.name=document.getElementById('newItemName').value;
  newItem.price=document.getElementById('newItemPrice').value*1;
  list.push(newItem);
  document.getElementsByTagName('div').innerHTML = "";
  runList();
  runTotal();
}
