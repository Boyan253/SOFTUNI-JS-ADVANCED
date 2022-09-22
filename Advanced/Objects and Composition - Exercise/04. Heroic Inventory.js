function heroic(inp){

let res = []


for(const ite of inp){

    let [name, level, items] = ite.split(' / ')
    
    level = +level
    items = items ? items.split(', ') : []
    res.push({name,level,items})
}console.log(JSON.stringify(res));





}heroic(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])