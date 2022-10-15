let expect = require('chai').expect
let companyAdministration = require('./companyAdministration')


describe('Administration', ()=>{
    describe('first variants', ()=> {

          it('test1', ()=>{
   expect(()=> companyAdministration.calculateSalary('hi')).to.throw('Invalid hours')
   expect(()=> companyAdministration.calculateSalary([])).to.throw('Invalid hours')
   expect(()=> companyAdministration.calculateSalary({})).to.throw('Invalid hours')
   expect(()=> companyAdministration.calculateSalary(-10)).to.throw('Invalid hours')
   expect(companyAdministration.calculateSalary(100)).to.equal(1500)
   expect(companyAdministration.calculateSalary(160)).to.equal(2400)
   expect(companyAdministration.calculateSalary(165)).to.equal(3475)
          })

          describe('first variants', ()=> {
          it('test2',()=>{
expect(()=>companyAdministration.hiringEmployee('Gosho','something',3)).to.throw('We are not looking for workers for this position.')
expect(companyAdministration.hiringEmployee('Gosho','Programmer',3)).to.equal('Gosho was successfully hired for the position Programmer.')
expect(companyAdministration.hiringEmployee('Gosho','Programmer',2)).to.equal('Gosho is not approved for this position.')
expect(companyAdministration.hiringEmployee('Gosho','Programmer',2)).to.equal('Gosho is not approved for this position.')



          })

        })

        describe('first variants', ()=> {
            it('test2',()=>{
expect(()=>companyAdministration.firedEmployee([],3)).to.throw('Invalid input')
expect(()=>companyAdministration.firedEmployee(3,[])).to.throw('Invalid input')
expect(()=>companyAdministration.firedEmployee('hi',[])).to.throw('Invalid input')
expect(()=>companyAdministration.firedEmployee({},'hi')).to.throw('Invalid input')
expect(()=>companyAdministration.firedEmployee(3,'hoi4')).to.throw('Invalid input')
expect(()=>companyAdministration.firedEmployee(['gosho','petur','ivan'],4)).to.throw('Invalid input')
expect(()=>companyAdministration.firedEmployee(['gosho','petur','ivan'],3)).to.throw('Invalid input')
expect(()=>companyAdministration.firedEmployee(['gosho','petur','ivan'],-1)).to.throw('Invalid input')
expect(()=>companyAdministration.firedEmployee('hi',3)).to.throw('Invalid input')
expect(()=>companyAdministration.firedEmployee([],{})).to.throw('Invalid input')
expect(()=>companyAdministration.firedEmployee({},[])).to.throw('Invalid input')
expect(()=>companyAdministration.firedEmployee({},3)).to.throw('Invalid input')
expect(companyAdministration.firedEmployee(['gosho','petur','ivan'],2)).to.equal('gosho, petur')
            })



        })


    })
})