function addItem() {
    const getText = document.getElementById('newItemText')
    const getValue = document.getElementById('newItemValue')
    const menu = document.getElementById('menu')

    const newOption = document.createElement('option')
    newOption.textContent = getText.value
    newOption.value = getValue.value

    menu.appendChild(newOption)

    getText.value = ''
    getValue.value = ''
}