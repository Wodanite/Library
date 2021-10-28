let myLibrary=[];
const tableDiv=document.querySelector("#tableDiv");
const addBookForm=document.createElement("div");
const addBookButton=document.querySelector("#addBookButton");

function Book(index, title, author, pages, read){
    this.index=index
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
}

function addBookToLibrary(titleInput, authorInput, pagesInput, readInput){
    let bookIndex=myLibrary.length;
    const book=new Book(bookIndex, titleInput, authorInput, pagesInput, readInput);
    myLibrary.push(book);
}

for(let i=0;i<10;i++){
    addBookToLibrary(i+"input","someAuthor",i*5,"yes");
}

function createTable(){
    let table="<table>";

    for(let i=0;i<myLibrary.length;i++){
        let removeButtonID="remove"+i;
        let toggleButtonID="toggle"+i;
        table+="<tr>";
        table+="<td>";
        table+=i+1;
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
        table+="<td>";
        table+=`<button class='removeBookButton' id='${removeButtonID}'>Remove Book</button>`
        table+="</td>"
        table+="<td>";
        table+=`<button class='toggleReadStatusButton' id='${toggleButtonID}'>Change Read Status</button>`
        table+="</td>"
        table+="</tr>"
    }
    
    table+="</table>";
    
    tableDiv.innerHTML=table;

    removeBook();
    toggleReadStatus();
}

addBookButton.addEventListener("click",()=>{
    addBookForm.innerHTML='<form><label for="title">Title</label><input type="text" name="title" id="titleInput"><br><label for="author">Author</label><input type="text" name="author" id="authorInput"><br><label for="pages">Number of pages</label><input type="number" name="pages" id="pagesInput"><br><label for="readStatus">Read Status</label><select name="readStatus" id="readStatusInput"><option value="yes">yes</option><option value="no">no</option></select><br><button id="submitButton" type="reset">Add new Book</button></form>';
    document.body.appendChild(addBookForm);

    const submitButton=document.querySelector("#submitButton");
    submitButton.addEventListener("click",()=>{
        let title=document.querySelector("#titleInput").value;
        let author=document.querySelector("#authorInput").value;
        let pages=document.querySelector("#pagesInput").value;
        let readStatus=document.querySelector("#readStatusInput").value;

        if(checkForHtml(title)==false && checkForHtml(author)==false){
            addBookToLibrary(title,author,pages,readStatus);

            createTable();

            document.body.removeChild(addBookForm);
        }
    });
});

function removeBook(){
    let removeBookButtons=document.querySelectorAll(".removeBookButton");
    removeBookButtons.forEach((button)=>{
        button.addEventListener("click",()=>{
            let buttonID=getID(button);
            myLibrary.splice(buttonID,1);
            createTable();
        });
    });
}

function toggleReadStatus(){
    let toggleReadStatusButtons=document.querySelectorAll(".toggleReadStatusButton");
    toggleReadStatusButtons.forEach((button)=>{
        button.addEventListener("click",()=>{
            let buttonID=getID(button);
            let index=buttonID.slice(6);
            
            if(myLibrary[index].read=="yes"){
                myLibrary[index].read="no";
            }else{
                myLibrary[index].read="yes";
            }
            
            createTable();
        });
    });
}

function getID(btn){
    let id=btn.id;
    return id;
}

function checkForHtml(checkValue){
    let expressionFound=false;
    if(checkValue.includes("<") || checkValue.includes(">")){
        expressionFound=true;
    }
    return expressionFound;
}

createTable();
