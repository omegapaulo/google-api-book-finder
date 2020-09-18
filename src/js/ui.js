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

export function alertError(form) {
  form.classList.add('error');
}

export function removeAlertError(form) {
  form.classList.remove('error');
}
