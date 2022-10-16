function areavol(areain, volin, input) {
    let data = JSON.parse(input)

 let res= []

for(let cube of data)
{
let cur = {
    area: areain.call(cube),
    volume: volin.call(cube)
}
res.push(cur)
    
        


}
return res}

areavol(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)



    

    function area() {
            return Math.abs(this.x * this.y);
        };
        



        function vol() {
                return Math.abs(this.x * this.y * this.z);
            };
            