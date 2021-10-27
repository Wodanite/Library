let myLibrary=[];
const tableDiv=document.querySelector("#tableDiv");
const addBookForm=document.createElement("div");
const addBookButton=document.querySelector("#addBookButton");
const submitButton=document.querySelector("#submitButton");

function Book(title, author, pages, read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
}

function addBookToLibrary(titleInput, authorInput, pagesInput, readInput){
    const book=new Book(titleInput, authorInput, pagesInput, readInput);
    myLibrary.push(book);
}

for(let i=0;i<10;i++){
    addBookToLibrary(i+"input","someAuthor",i*5,"yes");
}

let table="<table>";

for(let i=0;i<myLibrary.length;i++){
    table+="<tr>";
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

addBookButton.addEventListener("click",()=>{
    addBookForm.innerHTML='<form><label for="author">Author</label><input type="text" name="author" id="authorInput"><br><label for="title">Title</label><input type="text" name="title" id="titleInput"><br><label for="pages">Number of pages</label><input type="number" name="pages" id="pagesInput"><br><label for="readStatus">Read Status</label><input type="text" name="readStatus" id="readStatusInput"><br><button id="submitButton">Add new Book</button></form>';
    document.body.appendChild(addBookForm);
});

submitButton.addEventListener("click",()=>{
    let author=document.querySelector("#authorInput").value;
    let title=document.querySelector("#titleInput").value;
    let pages=document.querySelector("#pagesInput").value;
    let readStatus=document.querySelector("#readStatusInput").value;
    addBookToLibrary(author,title,pages,readStatus);
});