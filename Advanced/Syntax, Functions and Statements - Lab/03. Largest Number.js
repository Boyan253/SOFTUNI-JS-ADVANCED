function large(inp,sinp,pinp){

    let result;
    
    
    if(inp > sinp && inp > pinp)
    {
        result = inp
    }else if (sinp > inp && sinp > pinp){
        result = sinp
    }else if(pinp > inp && pinp > sinp){
        result = pinp
    
    }console.log(`The largest number is ${result}.`);
    
    
    
    
    
    }