function extractText() {
 let items = [...document.querySelectorAll('li')]
 
 let finaldata = (items.map(e => e.textContent).join('\n'));
 document.getElementById('result').value = finaldata

}