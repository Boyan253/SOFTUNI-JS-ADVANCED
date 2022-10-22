window.addEventListener("load", solve);

function solve() {

  let firstnameInput = document.getElementById('first-name')
  let secondnameInput = document.getElementById('last-name')
  let ageInput = document.getElementById('age')
  let storytitleInput = document.getElementById('story-title')
  let storyInput = document.getElementById('story')
  let genreinput = document.getElementById('genre')
  
  let ultoappend = document.getElementById('preview-list')


document.getElementById('form-btn').addEventListener('click', OnClick)
  

function OnClick(e){

if(firstnameInput.value == '' || secondnameInput.value == '' || ageInput.value == '' || storytitleInput.value == '' || storyInput.value == '' ){
return
}else{
  let li = document.createElement('li')
  
let firstname = firstnameInput.value
let secondname = secondnameInput.value
let age = ageInput.value
let storytitle = storytitleInput.value
let story = storyInput.value
let genre = genreinput.value
li.className = 'story-info'
li.innerHTML = `<article>
<h4>Name: ${firstname}</h4>
<p>Age: ${age}</p>
<p>Title: ${storytitle}</p>
<p>Genre: ${genre}</p>
<p>${story}</p>
</article>
<button class='save-btn'>Save Story</button>
<button class='edit-btn'>Edit Story</button>
<button class='delete-btn'>Delete Story</button>`

ultoappend.appendChild(li)
firstnameInput.value = ''
    secondnameInput.value = ''
      ageInput.value = '' 
       storytitleInput.value = ''
       genreinput.value = '' 
        storyInput.value = ''
        
       
let savebtn = li.querySelectorAll('button')[0]
savebtn.addEventListener('click', SaveClick)
let editbtn = li.querySelectorAll('button')[1]
editbtn.addEventListener('click', EditClick)
let deletebtn = li.querySelectorAll('button')[2]
deletebtn.addEventListener('click', DeleteClick)
document.getElementById('form-btn').disabled = true
function EditClick(){
  li.remove()
  document.getElementById('form-btn').disabled = false
 savebtn.disabled = true
 editbtn.disabled = true
 deletebtn.disabled = true

  firstnameInput.value = firstname
  secondnameInput.value = secondname
    ageInput.value = age
     storytitleInput.value = storytitle
     genreinput.value = genre
      storyInput.value = story

      



}
function SaveClick(){
document.getElementById('main').innerHTML = `<h1>Your scary story is saved!</h1>`


}
function DeleteClick(ev){
let parent = ev.target.parentNode
parent.remove()
document.getElementById('form-btn').disabled = false


}
}



}
}
