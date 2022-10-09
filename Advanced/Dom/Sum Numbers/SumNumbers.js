function calc() {
   let num = document.getElementById("num1").value
   let num2 =  document.getElementById('num2').value

 
  let res =   Number(num) + Number(num2)
  document.getElementById('sum').value = res
}
