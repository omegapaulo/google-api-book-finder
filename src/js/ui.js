const books = document.querySelector('.book--cards');

export function showBooks(dataInfo) {
  dataInfo.forEach((dataResult) => {
    const data = dataResult;
    // console.log(data);
    books.innerHTML += `
      <div class="book--card">
        <img src=${data.volumeInfo.imageLinks.thumbnail} />
        <div>
        <p>${data.volumeInfo.title}</p>
        <ul>
        <li class="book--title">Author: <span>${data.volumeInfo.authors}</span></li>
        <li class="book--author">Publisher: <span>${data.volumeInfo.publisher}</span></li>
        <button  id="btn"><a href="${data.volumeInfo.previewLink}" target="_blank">Info</a></button>
        </ul>
        </div>
        <p>${data.volumeInfo.description}</p>
        </div>
    `;
  });
  // console.log(dataInfo);
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

// BUG Redo this code
export function alertError(form) {
  books.innerHTML = `
  <div class="alert--msg">
  <p>Please enter a book author or a title.</p>
  </div>
  `;
  form.classList.add('error');
}
setTimeout(() => {
  // TODO this code is not working well
  document.querySelector('input').classList.remove('error');
}, 3000);

export function removeAlertError(form) {
  form.classList.remove('error');
}
