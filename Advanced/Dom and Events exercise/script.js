function create(words) {
  
   let divcontainer = document.getElementById('content')

   for (let word of words) {
      let div = document.createElement('div')
      let p = document.createElement('p')
      p.innerText = word
      
      div.appendChild(p)
      div.addEventListener('click', OnClick)
      divcontainer.appendChild(div)
      p.style.display = 'none'
   }



   function OnClick(e){
      if(e.target.nodeName == 'p'){
         return
      }
      let p = e.target.children[0]
      p.style.display = 'block'









   }
}