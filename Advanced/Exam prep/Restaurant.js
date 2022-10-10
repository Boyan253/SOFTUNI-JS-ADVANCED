class Restaurant{
constructor(budgetMoney){
this.budgetMoney = budgetMoney
this.menu = {}
this.stockProducts = {}
this.history = []
this.menuud = []
this.stockedprod = []
this.counter = 0

}

loadProducts(products) {

let splited = products.length

for(let i = 0; i < products.length; i ++){
    let splitthem = products[i].split(' ')
  
    let[name,quantity,productTotalPrice] = splitthem
    quantity = Number(quantity)
    productTotalPrice = Number(productTotalPrice)
   if(productTotalPrice <= this.budgetMoney){
    if(Object.values(this.stockedprod).includes(name) ){
        this.stockProducts.quantity += Number(quantity)
        this.budgetMoney - productTotalPrice
        console.log(`Successfully loaded ${quantity} ${name}`);
        continue
    }
    this.history.push({
        name,
        quantity,
        productTotalPrice
    })
    
    
this.stockedprod.push({name,
    quantity,
    productTotalPrice})
    this.budgetMoney -= productTotalPrice
   console.log(`Successfully loaded ${quantity} ${name}`);
    
   }
   else{
    
   }
   return `There was not enough money to load ${quantity} ${name}`
}






}

addToMenu(meal, neededproducts, price ){
  
    for(let i = 0; i < neededproducts.length; i ++){
        let splitthem = neededproducts[i].split(' ')
let [productName ,productquantity] = splitthem
if(Object.values(this.menu).includes(meal) ){
   return `The ${meal} is already in the our menu, try something different.`
    }else{
        this.counter += 1
        this.menu = {meal,
            neededproducts,
            price
    
    }
    this.menuud.push({meal,
        neededproducts,
        price})
    
    return (`Great idea! Now with the ${meal} we have ${this.counter} meal in the menu, other ideas?`);
}

    
}
}
showTheMenu(){
let stringed = []
let menustringed
if(this.menuud.length == 0){
    return `Our menu is not ready yet, please come later...`
}else{

   
   
    for(let key of this.menuud){
    let meal = key.meal
    let price = key.price
 stringed.push({meal,
    price}) 
     menustringed = stringed.map(element => `${element.meal} - $ ${element.price}`).join('\n')
    
    } 
   
  
    
    
    
//   let all =  this.menu.map(orders => {`${orders.name} ${orders.price}`})
//   console.log(all);
}
return menustringed 

}

makeTheOrder(name){
    if(!Object.values(this.menuud) == name){
return `There is not ${name} yet in our menu, do you want to order something else?`
    }
let quantitybyname = this.menuud.map(e => (e.neededproducts))
let quantifier = this.stockedprod.map(e => e.name)
let liquid = quantitybyname.join(' ').split(' ')
let mapped = this.menuud.findIndex(p => p.meal == name)

for(let ala of this.menuud[mapped].neededproducts){
let splitart = ala.split(' ')
let nameofprod = splitart[0]
let howmuchofprod = splitart[1]
if(quantifier.includes(nameofprod)){
    let mappeded = this.history.findIndex(p => p.name == nameofprod)
    this.history[mappeded].quantity-= Number(howmuchofprod)
    
}else if(!quantifier.includes(nameofprod)){
    return `For the time being, we cannot complete your order (${name}), we are very sorry...`
    

}

}
return `Your order (${name}) will be completed in the next 30 minutes and will cost you ${this.menuud[mapped].price}.`

}


}




let test = new Restaurant(1000);
test.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']);
