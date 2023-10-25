const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    pages: 180,
    bookDetails() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    }
}
console.log(book.bookDetails());

const book2 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    pages: 281,
    bookDetails() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    }
}

console.log(book2.bookDetails());