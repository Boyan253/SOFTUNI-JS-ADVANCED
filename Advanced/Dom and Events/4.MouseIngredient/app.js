function attachGradientEvents() {
   let element = document.getElementById('gradient')
element.addEventListener('mousemove',OnMouseOver)
let result = document.getElementById('result')
function OnMouseOver(ev){
    result.textContent = (Math.floor(ev.offsetX / element.clientWidth * 100))+'%'




}

}