function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))

  //.then(json => console.log(json[1]['characters']['597']));
  /*
  .then(json => console.log(json[0]["numberOfPages"] + json[1]["numberOfPages"] + 
  json[2]["numberOfPages"] + json[3]["numberOfPages"] + json[4]["numberOfPages"] + 
  json[5]["numberOfPages"] + json[6]["numberOfPages"] + json[7]["numberOfPages"] + 
  json[8]["numberOfPages"] + json[9]["numberOfPages"]))
  */
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
