window.addEventListener("load", solve);

function solve() {
  
  let publishbtn = document.getElementById('publish')
let make = document.getElementById('make')
let model = document.getElementById('model')
let year = document.getElementById('year')
let fuel = document.getElementById('fuel')
let originalcost = document.getElementById('original-cost')
let sellingprice = document.getElementById('selling-price')
let tr = document.createElement('tr')
let list = document.getElementById('table-body')
let finallist = document.getElementById('cars-list')
let li = document.createElement('li')
let sumsell = 0



publishbtn.addEventListener("click", (ev) => {
  ev.preventDefault()

if(!make.value == '' && !model.value == '' && !year.value == '' && !fuel.value == '' && !originalcost.value == '' && !sellingprice.value == '' && sellingprice.value > originalcost.value){
  
    console.log('its all done');

}else{
console.log('its not all done');

}})

publishbtn.addEventListener('click',whenright)
function whenright(){
  tr.innerHTML =  `<tbody id = 'table-body'>
  <tr class = 'row'>
    <td>${make.value}</td>
    <td>${model.value}</td>
    <td>${year.value}</td>
    <td>${fuel.value}</td>
    <td>${originalcost.value}</td>
    <td>${sellingprice.value}</td>
    <td>
    <button id = 'editbtn' class = 'action-btn edit'>Edit</buttton>
    <button id = 'approve' class = 'action-btn approve'>Sell</buttton>
     </td>
  </tr>
</tbody> `
let maked = make.value
let modele = model.value
let yeare = year
let fuele = fuel
let originalcoste = originalcost.value
let sellingpricee = sellingprice.value
sumsell = +sellingprice.value - +originalcost.value
list.appendChild(tr)
make.value = ''
model.value = ''

originalcost.value = ''
sellingprice.value = ''

let btnedit = tr.querySelector('.edit')
btnedit.addEventListener('click',Edit)
let btnapprove = tr.querySelector('.approve')
btnapprove.addEventListener('click',Approved)

li.innerHTML = `<ul id = 'cars-list'>
<li class = 'each-list'>
  <span>${maked}</span>
  <span>${modele}</span>
  <span>${sumsell}</span>
</li>



</ul>`
function Edit(){
  make.value = maked
  model.value = modele
  
  originalcost.value = originalcoste
  sellingprice.value = sellingpricee
}function Approved(){
console.log('selled');
finallist.appendChild(li)
btnapprove.remove()
          btnedit.remove()

document.getElementById('profit').textContent = sumsell.toFixed(2)


}
}

}

