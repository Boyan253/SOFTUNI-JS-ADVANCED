window.addEventListener('load', solution);

function solution() {

  let fullnameinp = document.getElementById('fname')
  let emailinp = document.getElementById("email")
  let phoneinp = document.getElementById('phone')
  let adressinp = document.getElementById('address')
  let postalcodeinp = document.getElementById('code')

  document.getElementById('submitBTN').addEventListener('click', Onclick)

  function Onclick(ev) {
    ev.preventDefault()
    if (fullnameinp.value != '' && emailinp.value != '') {
      let ultoappend = document.getElementById('infoPreview')
      let li = document.createElement('li')
      let fname = fullnameinp.value
      let email = emailinp.value
      let phone = phoneinp.value
      let address = adressinp.value
      let postalcode = postalcodeinp.value
 


      li.innerHTML = `
                <li>Full Name: ${fullnameinp.value}</li>
                <li>Email: ${emailinp.value}</li>
                <li>Phone Number: ${phoneinp.value}</li>
                <li>Address: ${adressinp.value}</li>
                <li>Postal Code: ${postalcodeinp.value}</li>
                `
      fullnameinp.value = ''
      emailinp.value = ''
      phoneinp.value = ''
      adressinp.value = ''
      postalcodeinp.value = ''

      ultoappend.appendChild(li)
      document.getElementById('submitBTN').disabled = true


      let editbtn = document.getElementById('editBTN')
      document.getElementById('editBTN').disabled = false
      editbtn.addEventListener('click', EditCLick)
      let continuebtn = document.getElementById('continueBTN')

      continuebtn.disabled = false

      continuebtn.addEventListener('click', OnContinuing)

      function EditCLick() {
        li.remove()
        fullnameinp.value = fname
        emailinp.value = email
        phoneinp.value = phone
        adressinp.value = address
        postalcodeinp.value = postalcode
        document.getElementById('editBTN').disabled = true
        continuebtn.disabled = true
        document.getElementById('submitBTN').disabled = false
      }

      function OnContinuing() {
let divid = document.getElementById('block')
divid.innerHTML = `<h3>Thank you for your reservation!</h3>`
        console.log('hi');
      }
    } else {
return
    }
  }


}
