document.querySelector('.header--form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const inputValue = document.querySelector('.search').value;

  const dataObj = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&maxResults=40&projection=full&printType=books`);
  // const dataObj = await fetch('harrypotter.json');

  const dataStatus = await dataObj.json();

  dataStatus.items.forEach((book) => {
    const bookInfo = book.volumeInfo;

    // console.log(bookInfo);

    if (bookInfo.description !== undefined) {
      document.querySelector('.book--cards').innerHTML += `
      <div class="book--card">
      <img src=${bookInfo.imageLinks.thumbnail} alt="" />
      <div>
      <p>${bookInfo.title}</p>
      <ul>
      <li class="book--title">Author: <span>${bookInfo.authors}</span></li>
      <li class="book--author">Published: <span>${bookInfo.publishedDate}</span></li>
      <button  id="btn"><a href="${bookInfo.previewLink}" target="_blank">See this Book</a></button>
      </ul>
      </div>
        <p>${bookInfo.description}</p>
        </div>
        
        `;
    }
    document.querySelector('.search').value = '';
  });
});

function resetUi() {
  document.querySelector('.book--cards').innerHTML = '';
}

document.querySelector('.search').addEventListener('keyup', resetUi);
