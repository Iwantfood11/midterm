 async function getBooks(){
   try{
    const response = await fetch("https://upadhayay.github.io/db.json");
    const data = await response.json();

    const mybooks_div = document.querySelector("#mybooks")


    for(let book of data.books){
        console.log(book)
        const book_div = document.createElement("div")
        book_div.className = "book";
       book_div.innerHTML = `
       <img class = "paper" src = "images/paper-icon.png" alt = "https://www.magnific.com/free-photos-vectors/paper" height = "100px" width = "100px">
      <h2>Title: ${book.title} </h2>
       <h3> Year: ${book.year} </h3>
       <h4> Published: ${book.published}</h3>`;
        mybooks_div.append(book_div)
    };
}
    catch(error){
    console.log("error in fetch;")
}
}
    getBooks(); 