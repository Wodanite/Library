let myLibrary=[];
const tableDiv=document.querySelector("#tableDiv");

function Book(number, title, author, pages, read){
    this.number=number
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
}

function addBookToLibrary(numberInput, titleInput, authorInput, pagesInput, readInput){
    const book=new Book(numberInput,titleInput, authorInput, pagesInput, readInput);
    myLibrary.push(book);
}

for(let i=0;i<10;i++){
    addBookToLibrary(i,i+"input","someAuthor",i*5,"yes");
}

let table="<table>";

for(let i=0;i<myLibrary.length;i++){
    table+="<tr>";
    table+="<td>";
    table+=myLibrary[i].number;
    table+="</td>"
    table+="<td>";
    table+=myLibrary[i].title;
    table+="</td>"
    table+="<td>";
    table+=myLibrary[i].author;
    table+="</td>"
    table+="<td>";
    table+=myLibrary[i].pages;
    table+="</td>"
    table+="<td>";
    table+=myLibrary[i].read;
    table+="</td>"
    table+="</tr>"
}

table+="</table>";

tableDiv.innerHTML=table;
