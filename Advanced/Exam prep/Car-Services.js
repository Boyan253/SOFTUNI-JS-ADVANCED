const {carService} = require('./myModule');
let expect = require('chai').expect;


describe("Tests", ( )=> {
    describe("isItExpensive", ()=> {

        it("test 1", ()=> {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money')
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money')
if(!carService.isItExpensive('Engine') || !carService.isItExpensive('Transmission')){
    throw('The overall price will be a bit cheaper')
}



        });
    })
        describe("Disc", ()=> {

            it("Discount", ()=> {
                expect(carService.discount(4,1500)).to.equal('Discount applied! You saved 225$')
                expect(( ) => carService.discount('HELLO')).throw("Invalid input")
                if(!carService.discount() == Number){
                    throw("Invalid input")
                }
            });})
            describe("test suite 3", ()=> {

                it("partsToBuy", ()=> {
                   expect(() => carService.partsToBuy((['guma','wheel','tier'],450))).throw('Invalid input')
                });

       

     });

     // TODO: …
});
