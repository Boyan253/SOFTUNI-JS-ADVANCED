window.addEventListener("load", solve);

function solve() {
let inputfieldtitle = document.getElementById('main-container')
let inputfieldcategory = document.getElementById('post-category')
let inputfieldcontent = document.getElementById("post-content")
let publishbtn = document.getElementById('publish-btn')

document.getElementById('publish-btn').addEventListener('click',onClick())

function onClick(event) {
  console.log('publish clicked');
  if(publishbtn){
  if (inputfieldtitle.textContent !== '' && inputfieldcategory.textContent !== '' && inputfieldcontent.textContent !== '') {
    let element = document.createElement('ul')
    element.appendChild('inputfieldtitle.textContent')
    element.appendChild('inputfieldcategory.textContent')
    element.appendChild('inputfieldcontent.textContent')
  }else{
    console.log('not done');
  }
}
}













}