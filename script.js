var item1 = {name: "Avocados", price: 2.49};
var item2 = {name: "Almond Milk", price: 4.99};
var item3 = {name: "Granola", price: 5.49};
var item4 = {name: "Greek Yogurt", price: 1.25};

var list = [item1, item2, item3, item4];

function runList() {
  for (var i=0; i<list.length; i++) {
    var listItem = document.createElement('p');
    listItem.innerHTML=list[i].name+": $"+list[i].price;
    document.getElementById('displayList').appendChild(listItem);
  }
}

function runTotal() {
  var totalCost=0;

  for (var i=0; i<list.length; i++) {
    totalCost = totalCost + list[i].price;
  }
  var listTotal = document.createElement('div');
  listTotal.innerHTML = "Total: $"+totalCost;
  document.getElementById("displayList").appendChild(listTotal);
}

runList();
runTotal();

function addItem(){
  var newItemName = document.getElementById('newItemName').value;
  var newItemPrice = document.getElementById('newItemPrice').value*1;
  var newItem = {
    name: newItemName,
    price: newItemPrice
  }
  list.push(newItem);
  runList();
  runTotal();
}
