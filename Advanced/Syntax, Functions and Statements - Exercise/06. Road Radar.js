function solve(speed, area) {
    let isOver = false;
    let overWith;

    let speedLimit;

    switch(area) {
        case 'motorway':
            speedLimit = 130;
            if (speed > speedLimit) {
                isOver = true;
                overWith = speed - 130;
                
            }

        break;
        case 'interstate':
            speedLimit = 90;
            if (speed > speedLimit) {
                isOver = true;
                overWith = speed - 90;
            }
            
            break;
        case'city':
        speedLimit = 50;
        if (speed > speedLimit) {
            isOver = true;
            overWith = speed - 50;
        }
        break;

        case'residential':
        speedLimit = 20;
        if (speed > speedLimit) {
            isOver = true;
            overWith = speed - 20;
        }
        break;

    }

    if (isOver) {
        let status;
        
        if (overWith <= 20) {
            status = 'speeding';
    }else if (overWith <= 40) {
        status = 'excessive speeding';
    }else {
        status = 'reckless driving';
    }

    return `The speed is ${overWith} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }

    return `Driving ${speed} km/h in a ${speedLimit} zone`

}

console.log(solve(21, 'residential'));