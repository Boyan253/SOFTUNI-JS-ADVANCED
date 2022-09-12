window.addEventListener("load", solve);

function solve() {
  let inputfieldtitle = document.getElementById('post-title')
  let inputfieldcategory = document.getElementById('post-category')
  let inputfieldcontent = document.getElementById("post-content")
  let publishbtn = document.getElementById('publish-btn')
  let listapproved = document.getElementById('published-list')
  let btnclear = document.getElementById('clear-btn')
document.getElementById("publish-btn").addEventListener('click',Publish)



function Publish(params) {

  
    if (inputfieldtitle.value != '' && inputfieldcategory.value != '' && inputfieldcontent.value != '') {
      console.log('done')
      let ul = document.getElementById("review-list")
      let li = document.createElement('li')
      li.className = 'rpost'
      let title =inputfieldtitle.value
      let category = inputfieldcategory.value
      let content = inputfieldcontent.value
      li.innerHTML = `<article>
      <h4>${inputfieldtitle.value} </h4>
<p> ${inputfieldcontent.value}</p>
<p> ${inputfieldcategory.value}</p>

      </article>
      <button class ="action-btn edit">Edit</button>
      <button class ="action-btn approve">Approve</button>`
      ul.appendChild(li)
      inputfieldtitle.value = '' ;
       inputfieldcategory.value = '' ;
        inputfieldcontent.value = '';
        
        function Edit(params) {
          inputfieldtitle.value =   title
          inputfieldcontent.value = content
          inputfieldcategory.value = category
          li.remove()
          
         
        }
        
        function Approve(){
          console.log('approved');
          listapproved.appendChild(li)
          btnapprove.remove()
          btnedit.remove()
        }


let btnedit = li.querySelector('.edit')
btnedit.addEventListener('click',Edit)
let btnapprove = li.querySelector('.approve')
btnapprove.addEventListener('click',Approve)
btnclear.addEventListener('click',Clear)
function Clear(){
 li.remove()
  }
    }else{
      console.log('not done');
    }
}










}
