let myLibrary=[];

function Book(number, title, author, pages, read){
    this.number=number
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
}

const firstBook=new Book("1","Metro 2033","Dmitri Gluchovsky","845","yes");

console.log(firstBook.title);