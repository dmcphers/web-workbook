'use strict';
window.onload = function(){
    let count = document.getElementsByTagName('ul');
    
    console.log(count[0].children.length);
    
    let newh2 = document.createElement('h2');
    newh2.innerHTML= "You have " + count[0].children.length + " items in your shopping cart";
    document.getElementsByTagName('h1')[0].after(newh2);
    
    createNewAddField();

    addDeleteFieldtoExistingItems();


  function createNewAddField(){
    let newinput = document.createElement('input');
    newinput.setAttribute("id", 'item-text');
    document.getElementsByTagName('ul')[0].after(newinput);
    let inputField = document.getElementById('item-text');
    inputField.setAttribute("placeholder", "Type to add Item");
    
    let newbutton = document.createElement('button');
    newbutton.setAttribute("id", 'add-button');
    document.getElementById('item-text').after(newbutton);
    newbutton.innerHTML = "add item";
    newbutton.onclick = addItemsExistingList;
  }
  

  function addItemsExistingList(event){
    let userInput = document.getElementById('item-text').value;
    let newItem = document.createElement('li');
    newItem.innerHTML= userInput;
    document.getElementsByTagName('ul')[0].append(newItem);
    document.getElementById("item-text").value = "";
    let count = document.getElementsByTagName('ul');
    console.log(count[0].children.length);
    addDeleteButton(newItem);
    let items = document.getElementsByTagName('li');
    newh2.innerHTML= "You have " + count[0].children.length + " items in your shopping cart";
    document.getElementsByTagName('h1')[0].after(newh2);
    console.log(newh2.innerHTML);
  }
  
 
  
  function addDeleteFieldtoExistingItems(){
    let list=document.getElementById("shopping-list");
    for (let i=0; i<list.children.length; i++){
    addDeleteButton(list.children[i]);
    }
  }
  
  
  
  function addDeleteButton (appendElement){
  console.log(appendElement);
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = deleteItem;
  appendElement.appendChild(deleteButton);
}
  
  function deleteItem(){
  this.parentNode.remove(this);
  var listItems = document.getElementById("shopping-list").getElementsByTagName("li");
  var newList = listItems.length;
  document.getElementById("item-text").value = "";
  newh2.innerHTML= "You have " + newList + " items in your shopping cart";
  document.getElementsByTagName('h1')[0].after(newh2);
  console.log(newh2.innerHTML);
}


}