const books = document.querySelector('.book--cards');

export function showBooks(dataInfo) {
  dataInfo.forEach((dataResult) => {
    const data = dataResult;
    books.innerHTML += `
      <div class="book--card">
        <img src=${data.volumeInfo.imageLinks.thumbnail} />
        <div>
          <p>${data.volumeInfo.title}</p>
            <ul>
              <li class="book--title">Author: <span>${data.volumeInfo.authors}</span></li>
              <li class="book--author">Publisher: <span>${data.volumeInfo.publisher}</span></li>
              <button  id="btn"><a id="btn-a" href="${data.volumeInfo.previewLink}" target="_blank">Info</a></button>
            </ul>
        </div>
          
        </div>
    `;
  });
}

export function clearBookCard(card) {
  card.innerHTML = '';
}

export function alertErrorMsg(form) {
  books.innerHTML = `
      <div class="alert--msg">
        <p>Please only alphabetic characters.</p>
      </div>
    `;
  form.classList.add('error');
}

export function alertError(form) {
  books.innerHTML = `
  <div class="alert--msg">
    <p>Please enter a book author or a title.</p>
  </div>
  `;
  form.classList.add('error');
}
