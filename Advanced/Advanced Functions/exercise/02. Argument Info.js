function info(information){
    let result = [];
    let count = {};
    [...arguments].forEach(a =>{
        let type = typeof a;
        result.push({type, value: a});
        if(!count[type]){
            count[type] = 0;
        }
        count[type]++
     })
     result.forEach(r => console.log(`${r.type}: ${r.value}`));
     let sort = Object.entries(count).sort((a, b) => b[1] - a[1])
     .forEach(c => console.log(`${c[0]} = ${c[1]}`))
}
