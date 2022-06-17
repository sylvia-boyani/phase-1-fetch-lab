const url = "https://anapioficeandfire.com/api/books";

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  let result = fetch(url)
    .then((response) => response.json())
    .then((data) => renderBooks(data))
    .catch((error) => `ERROR => ${console.error(error.message)}`);
  return result;
}

function renderBooks(books) {
  const main = document.querySelector("main")
  books.forEach((book) => {
    const h2 = document.createElement("h2")
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function(){
  fetchBooks();
});
