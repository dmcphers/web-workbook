'use strict'
window.onload = function(){
let list = document.querySelector('ul');
let message = "This list has: " + list.children.length + " items";
 alert(message);


 let newh2 = document.createElement('h2');
  newh2.innerHTML = "You have " + list.children.length + " items in your shopping cart";
  list.appendChild(newh2);

  h1.appendChild(newh2);

 createNewAddField();

  function createNewAddField(){
    let inputField = document.getElementById('item-text');
    inputField.setAttribute("placeholder", "Type to add Item");

  }
}
