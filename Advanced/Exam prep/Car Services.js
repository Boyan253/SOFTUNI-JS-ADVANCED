describe("Tests …", function() {
    describe("TODO …", function() {

        it("TODO …", function() {
            const carService = {


                isItExpensive (issue) {
            
            if(issue == 'Engine' || issue == 'Transmission'){
            return `The issue with the car is more severe and it will cost more money`}
             
            
            else{
            
                return       `The overall price will be a bit cheaper`
                
            }
                },
            
            
            
                discount(numberOfParts, totalPrice){
            
            if(numberOfParts != Number || totalPrice != Number){
            throw new Error `Invalid input`
            
            }
            
            let discount = 0
            if(numberOfParts > 2 && numberOfParts <= 7){
            
            totalPrice *= 0.15
            
            }else if (numberOfParts > 7){
               discount = 15
            }
            discount = 30
            
            
            let result = (discount / 100) * totalPrice
            
            if(numberOfParts >= 2){
                return "You cannot apply a discount"}
            else{
                return `Discount applied! You saved ${result}$`
            
            }
            
            
            
            
            
                },
            
            
            
            
            
                partsToBuy (partsCatalog, neededParts){
            
                    let totalSum = 0;
            
                    if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
                      throw new Error("Invalid input");
                    }
            else{
            
            neededParts.forEach((neededPart) => {
                partsCatalog.map((obj) =>
                {
                    if(obj.part == neededPart){
                        totalSum += obj.price
                    }
                })
            })
            return totalSum
            
            
            
            
            
            
            }
            
            
            
            
            
                }
            
            
            
            
            
            
            
            
            
            
            
            
            }
        });
     });

     // TODO: …
});
