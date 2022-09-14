function solve(number, a, b, c, d, e) {
    let commands = new Map;

    commands.set(0, a);
    commands.set(1, b);
    commands.set(2, c);
    commands.set(3, d);
    commands.set(4, e);

    for (let i = 0; i < 5; i++) {
        let cur = commands.get(i);
        switch (cur) {
            case 'chop':
                number = number / 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number = number * 3;
                break;
            case 'fillet':
                number = number * 0.8;
                break;
        }
        console.log(number);
    }
    
}