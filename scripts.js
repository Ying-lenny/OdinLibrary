function Book (name, author, pages, status) {
    this.name = name
    this.auther = author
    this.pages = pages
    this.status = status
    this.stateBook = function() {
        console.log(`${name} by ${author}, ${pages} long, ${status}`)
    }
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')
const book2 = new Book('A different Book', 'Steven S', '327', 'not read yet')
const book3 = new Book('A seperate Book', 'Karol K', '871', 'not read yet')

console.table([book1, book2, book3])
