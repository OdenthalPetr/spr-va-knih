let booksArray = []

var output = document.getElementById("booksOutput")

function addBook(){
    let book = {
        title: "",
        author: "",
        genre: "",
        year: "",
    }

    book.title = document.getElementById("titleInput").value
    book.author = document.getElementById("authorInput").value 
    book.genre = document.getElementById("genreInput").value 
    book.year = document.getElementById("yearInput").value 

    booksArray.push(book)

    displayBooks()
}

function displayBooks(){

    console.log(booksArray);
 
    for(let i = 0; i < booksArray.length; i++){
        output.innerHTML += booksArray[i].title + " " + booksArray[i].author + " " + booksArray[i].genre + " " + booksArray[i].year
    }
}

