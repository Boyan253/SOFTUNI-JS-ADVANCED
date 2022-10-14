let expect = require('chai').expect

let SomeMore = require('./bookSelection')




describe("booksel tests",  () =>  {
    describe("First procedure",  () =>  {

        it("isGenreSuitable", ()  =>{
         
           expect(SomeMore.isGenreSuitable('Thriller', 5)).to.equal('Books with Thriller genre are not suitable for kids at 5 age')
           expect(SomeMore.isGenreSuitable('Horror', 6)).to.equal('Books with Horror genre are not suitable for kids at 6 age')
         expect(SomeMore.isGenreSuitable('kidsBook',12)).to.equal('Those books are suitable')
         expect(SomeMore.isGenreSuitable('ab',3)).to.equal('Those books are suitable')
         expect(SomeMore.isGenreSuitable('ab',3)).to.equal('Those books are sudsitable')
        });
     });
     describe("Second procedure", () => {
        it('isItAffordable',  () => {
            expect(() => SomeMore.isItAffordable('hey guys',5)).to.throw('Invalid input')

            expect(() => SomeMore.isItAffordable('hey guys','guys')).to.throw('Invalid input')
            
            expect(SomeMore.isItAffordable(6,5)).to.equal("You don't have enough money")

            // expect(SomeMore.isItAffordable(5,5)).to.equal("Book bought. You have 0$ left")

            // expect(SomeMore.isItAffordable(70,250)).to.equal("Book bought. You have 180$ left")
        })
     })
     describe("Third procedure", () => {
        it('isItAffordable',  () => {
       expect(() => SomeMore.suitableTitles([ 'ras', 'pas', 'sas' ] , 56)).to.throw('Invalid input')
       expect(() => SomeMore.suitableTitles({} , [])).to.throw('Invalid input')
       expect(() => SomeMore.suitableTitles([] , [])).to.throw('Invalid input')
       expect(() => SomeMore.suitableTitles({} , {})).to.throw('Invalid input')
       expect(() => SomeMore.suitableTitles('hi' , [])).to.throw('Invalid input')
       expect(() => SomeMore.suitableTitles(4 , [])).to.throw('Invalid input')
       expect(() => SomeMore.suitableTitles({} , 5)).to.throw('Invalid input')
       expect(SomeMore.suitableTitles(['wagner'] , 'wagner')).to.equal(['wagner'])




        })
     })
        })
     
     

