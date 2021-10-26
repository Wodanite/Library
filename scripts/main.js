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
    table+=myLibrary[i];
    table+="</td>"
    table+="</tr>"
}

table+="</table>";

console.log(table);

console.table(myLibrary);

tableDiv.innerHTML=table;