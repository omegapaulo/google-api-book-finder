import Books from './googleBooks.js';
import * as ui from './ui.js';

const books = new Books();

const searchBook = document.querySelector('form.header--form');
const inputText = searchBook.querySelector('form input[type="text"]');

searchBook.addEventListener('submit', (e) => {
  // preventing default form behavior
  e.preventDefault();

  const re = /[a-z0-90-9éèêëùüúàâóòöïíìçäãá][^@£${}[\]!"#¤%&/()=?]/i;

  if (inputText.value !== '') {
    if (!re.test(inputText.value)) {
      inputText.style.borderColor = 'red';
      ui.alertErrorMsg(inputText);
    } else {
      books.getBooks(inputText.value).then((data) => {
        const dataInfo = data.items;
        ui.showBooks(dataInfo);
      });
    }
  } else {
    inputText.style.borderColor = 'red';
    ui.alertError(inputText);
  }
  searchBook.querySelector('input').value = '';
  searchBook.querySelector('input').focus();
});

document.querySelector('form input[type="text"]').addEventListener('keydown', () => {
  document.querySelector('form.header--form input').style.borderColor = '#71d849f3';
  ui.clearBookCard(document.querySelector('.book--cards'));
});
