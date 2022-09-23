function solve(){
   
let AuthorInput = document.getElementById('creator')
let titleInput = document.getElementById('title')
let CategoryInput = document.getElementById('category')
let ContentInput =  document.getElementById('content')
let li = document.createElement('article')
let listtoappend = document.querySelectorAll('section')
let ol = document.createElement('li')
let toappendol = document.querySelector('ol')


let btncreate = document.querySelector("button")

btncreate.addEventListener('click', onclick)

let title = titleInput.value

let category = CategoryInput.value
let author = AuthorInput.value
let content = ContentInput.value
function onclick(ev){
   ev.preventDefault()
if(AuthorInput.value !=='' || titleInput.value !== '' || CategoryInput.value !== '' || ContentInput.value !== ''){
   console.log(titleInput.value);
li.innerHTML =` 


   <h1>${titleInput.value}</h1>
   <p>Category:
      <strong>${CategoryInput.value}</strong>
   </p>
   <p>Creator:
      <strong>${AuthorInput.value}</strong>

   </p><p>
         ${ContentInput.value}
   </p>
   <div class = 'buttons'>
      <button class = 'btn delete'>Delete</button>
      <button class = 'btn archive'>Archive</button>
   </div>
`

let btndel = li.querySelector('.delete')
btndel.addEventListener('click',Delete)
let btnarchive = li.querySelector('.archive')
btnarchive.addEventListener('click', Archiving)

function Delete (){
   li.remove()
}


listtoappend[1].appendChild(li)


titleInput.value = ''
CategoryInput.value = ''
AuthorInput.value = ''
ContentInput.value = ''
}

else{

}

function Archiving(){
   ol.innerHTML = `${title}`
  

   toappendol.appendChild(ol)
}


}












  }
