function solve() {
   
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('email')
let birth = document.getElementById('birth')
let position = document.getElementById('position')
let salary = document.getElementById('salary')
document.getElementById('add-worker').addEventListener('click', onclick)
let sal = 0
function onclick(e){
    e.preventDefault()
    if (fname.value != '' && lname.value != '' && email.value != '' && birth.value != '' && position.value != '' && salary.value != ''){
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        let tbodytoattach = document.getElementById('tbody')
 
let firstn = fname.value
let lastname = lname.value
let emailname = email.value
let birthname = birth.value
let posname = position.value
let salaryn = salary.value


let artr 
tr.innerHTML = `
<td>${fname.value}</td>

<td>${lname.value}</td>

<td>${email.value}</td>

<td>${birth.value}</td>

<td>${position.value}</td>

<td>${salary.value}</td>

<td><button class='fired'>Fired</button> <button class="edit">Edit</button></td>`
   tbodytoattach.appendChild(tr)
  
    sal += Number(salary.value)
document.getElementById('sum').textContent = sal.toFixed(2)

let editbtn = tr.querySelector('.edit')
editbtn.addEventListener('click', EditClick)

let firedbtn = tr.querySelector('.fired')
firedbtn.addEventListener('click', FireClick)
function EditClick(){
fname.value = tr.children[0].textContent
lname.value = tr.children[1].textContent
email.value = tr.children[2].textContent
birth.value = tr.children[3].textContent
position.value = tr.children[4].textContent
salary.value = tr.children[5].textContent
sal -= Number(tr.children[5].textContent)
document.getElementById('sum').textContent = sal.toFixed(2)
tr.remove()
}function FireClick(){
    sal -= Number(tr.children[5].textContent)
document.getElementById('sum').textContent = sal.toFixed(2)
tr.remove()
}
fname.value = ''
 lname.value =''
  email.value =''
birth.value = ''
 position.value = ''
 salary.value  = ''

}else{
    console.log('nono');
}

}
}
solve()