function storeCatalogue(arr) {
    let firstMap=new Map();
    for (let obj of arr) {
        let line = obj.split(/\s:\s/);
        let letter=line[0][0]
        let product=line[0];
        let price =line[1];
        if(!firstMap.has(letter)){
            firstMap.set(letter,new Map());
        }
        let secondMap=firstMap.get(letter);
        secondMap.set(product,price);
        firstMap.set(letter,secondMap);
    }
    firstMap=Array.from(firstMap).sort();
 
    for (let [letter,secondMap] of firstMap) {
        console.log(letter);
        secondArr=Array.from(secondMap).sort();
        for (let arr of secondArr) {
            console.log("  "+arr[0]+": "+arr[1]);
        }
    }
}storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])