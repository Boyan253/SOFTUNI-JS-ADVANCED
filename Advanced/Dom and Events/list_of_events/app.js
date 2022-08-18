function addItem() {
   
  let element =  document.getElementById('newItemText').value
  let ul = document.createElement('li')
 ul.textContent = element
 document.getElementById('items').appendChild(ul)

}