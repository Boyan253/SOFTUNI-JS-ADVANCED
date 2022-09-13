function circling(inp){
    let type = typeof(inp)
    if (type == 'number'){
    
    let result = Math.pow(inp, 2) * Math.PI;
    console.log(result.toFixed(2));
    
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
    
    
    
    
    
    
    
    }