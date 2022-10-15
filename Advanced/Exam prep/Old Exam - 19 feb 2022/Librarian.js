class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity
        this.books = []
    }
    addBook(bookName, bookAuthor) {

        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.')
        }
        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        })
        
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {

let books = this.books.find(p => p.bookName == bookName)

if(books == undefined){
throw new Error(`${bookName} is not in the collection.`)
}if(books.payed == true){
    throw new Error (`${bookName} has already been paid.`)
}
books.payed = true
return `${bookName} has been successfully paid.`

    }
    removeBook(bookName) {

        let booksInd = this.books.findIndex(p => p.bookName == bookName)

if(booksInd == -1){
    throw new Error (`The book, you're looking for, is not found.`)
}
let book = this.books[booksInd]
if(book.payed == false){
throw new Error (`${bookName} need to be paid before removing from the collection.`)
}
this.books.splice(booksInd,1)
return `${bookName} remove from the collection.`


    }

    getStatistics(bookAuthor){
       
        let booked = this.books.map( b => `${b.bookName} == ${b.bookAuthor} - ${b.payed}.` ).sort().join(', ')
       
       let replaced = booked.replace('false','Not Paid')
       booked.replace('true','Paid')
        if(!booked.includes(bookAuthor)){
            throw new Error(`${bookAuthor} is not in the collection.`)
        }
if(bookAuthor == undefined){
    
    return [
        `The book collection has ${this.capacity -= this.books.length} empty spots left.`,
        `${replaced}`
        
    ].join('\n')
}else{


      


return [
    `${replaced}`
    
].join('\n')


    }
    }
}

let library = new LibraryCollection(5);

library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");