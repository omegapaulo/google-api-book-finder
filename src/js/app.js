import Books from './googleBooks.js';
import * as ui from './ui.js';

// Init classes 0C57-E20F 8622-8E0E
const books = new Books();

const searchBook = document.querySelector('form.header--form');

searchBook.addEventListener('submit', (e) => {
  // preventing default form behavior
  e.preventDefault();

  const inputText = searchBook.querySelector('form input[type="text"]');

  const re = /[a-z0-90-9éèêëùüúàâóòöïíìçäãá][^@£${}[\]!"#¤%&/()=?]/i;

  if (inputText.value !== '') {
    ui.alertError(inputText);
    // Check for reGex in the input
    if (!re.test(inputText.value)) {
      // Informe the user fo wrong input and color the border bottom
      // inputText.style.borderColor = 'red';
      ui.alertErrorMsg(inputText);
      console.log('Not correct');
    } else {
      books.getBooks(inputText.value).then((data) => {
        const dataInfo = data.items;
        ui.showBooks(dataInfo);
      });
    }
    // Make Http call form googleBooks.js
  } else {
    ui.alertError(inputText);
    console.log('no input added');
    // Log enter title or author in the ui through ui.js
  }
  searchBook.querySelector('input').value = '';
});

document.querySelector('form input[type="text"]').addEventListener('keyup', () => {
  ui.removeAlertError(document.querySelector('form.header--form input'));
  ui.clearBookCard(document.querySelector('.book--cards'));
});

// some changes
