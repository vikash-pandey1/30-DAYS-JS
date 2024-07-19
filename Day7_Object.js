const books = {
    title:'chanakya niti',
    author:'radha krishna pillai',
    year:'2022',
    details:function(){
        const items = `title is ${this.title} ans author is ${this.author} ans published in ${this.year}`
        console.log(items)
    },
    updatedDetails:function(year){
        const items = `title is ${this.title} ans author is ${this.author} ans published in ${year}`
        console.log(items)
    }
}
console.log(books)
console.log(books.title)
console.log(books.author)
console.log(books.year)
books.details();
books.updatedDetails(2023)

const library = {
    name:'GLA CENTRAL LIBRARY',
    books:[{
        title:'rich dad poor dad'
    },
    {
        title:'life amazing fact'
    }
],
getDetails:function(){
    console.log(this.name);
    const getBooks = library.books.forEach((book)=> console.log(book.title))
},
getDetailsIn:function(){
    console.log(this.name)
    library.books.forEach((book)=>{
        for(let item in book){
            console.log(`${item}: ${book[item]}`)
        }
    })
}
}

function bookName(){
    library.books.forEach(book => console.log(book))
}
bookName();
console.log(`library is ${library.name} and books are `)
bookName()

library.getDetails()
library.getDetailsIn()

console.log(Object.keys(library))
console.log(Object.values(library.books))





