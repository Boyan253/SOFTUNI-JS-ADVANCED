class Person{
constructor(firstname,lastname,age,email){
this.firstname = firstname
this.lastname = lastname
this.age = age
this.email = email
}
toString(){return `${this.firstname} ${this.lastname} (age: ${this.age}, email: ${this.email})`

}
}
 Person = result;
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");

expect(p.firstName).to.be.equal("Peter",
            "Property 'firstName' not working");
