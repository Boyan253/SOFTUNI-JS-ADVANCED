let expect = require('chai').expect
let chooseYourCar = require('./ChooseYourCar')

describe("chooseYourCar", () => {
  describe("Test for choosingType", () => {
    it("Check for invalid parameters", () => {
  expect(() => chooseYourCar.choosingType(1800)).to.throw('This type of car is not what you are looking for.')
  expect(() => chooseYourCar.choosingType('sedan','combi',1800)).to.throw('Invalid Year')
  expect(() => chooseYourCar.choosingType('sedan', 'mahma', 2021)).to.throw('This type of car is not what you are looking for.')
  expect(() => chooseYourCar.choosingType('sedan','combi',2025)).to.throw('Invalid Year')
  expect(chooseYourCar.choosingType('Sedan','combi',2010)).to.equal('This combi Sedan meets the requirements, that you have.')
  expect(chooseYourCar.choosingType('Sedan','combi',2008)).to.equal('This Sedan is too old for you, especially with that combi color.')


})
  })

  describe("Test2 for calculatePriceOfCar", () => {
    it("Check for valid parameters", () => {

      expect(() => chooseYourCar.carFuelConsumption('hi', 'bro')).to.throw('Invalid Information!')
      expect(() => chooseYourCar.carFuelConsumption('rpbp', 2)).to.throw('Invalid Information!')
      expect(() => chooseYourCar.carFuelConsumption(-1, 'bro')).to.throw('Invalid Information!')
      expect(() => chooseYourCar.carFuelConsumption(1, -4)).to.throw('Invalid Information!')
      expect(() => chooseYourCar.carFuelConsumption('bro',1)).to.throw('Invalid Information!')
      expect(chooseYourCar.carFuelConsumption(2,1)).to.equal('The car burns too much fuel - 50.00 liters!')
      expect(chooseYourCar.carFuelConsumption(2,20)).to.equal('The car burns too much fuel - 1000.00 liters!')
      expect(chooseYourCar.carFuelConsumption(10,0.7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.')
      expect(chooseYourCar.carFuelConsumption(10,0.5)).to.equal('The car is efficient enough, it burns 5.00 liters/100 km.')
    })})

    describe("Test2 for searchCar", () => {
      it("Check for valid parameters", () => {
  expect(() => chooseYourCar.brandName(4,4)).to.throw('Invalid Information!')
  expect(() => chooseYourCar.brandName(4,{})).to.throw('Invalid Information!')
  expect(() => chooseYourCar.brandName('haha',4)).to.throw('Invalid Information!')
  expect(() => chooseYourCar.brandName(4,'has')).to.throw('Invalid Information!')
  expect(() => chooseYourCar.brandName({},[])).to.throw('Invalid Information!')
  expect(() => chooseYourCar.brandName(4,[])).to.throw('Invalid Information!')
  expect(() => chooseYourCar.brandName([],[])).to.throw('Invalid Information!')
  expect(chooseYourCar.brandName(['saf','wad','wdaf'], 2)).to.equal('saf, wad')
  expect(chooseYourCar.brandName([3,4,5], 2)).to.equal('3, 4')
  expect(() => chooseYourCar.brandName(['saf','wad','wdaf'], 3)).to.throw('Invalid Information!')
  expect(() => chooseYourCar.brandName(['saf','wad','wdaf'],-2)).to.throw('Invalid Information!')
  
  expect(() => chooseYourCar.brandName([],-2)).to.throw('Invalid Information!')
  expect(() => chooseYourCar.brandName([],0)).to.throw('Invalid Information!')
  expect(() => chooseYourCar.brandName([],0)).to.throw('Invalid Information!')
      })})
    })