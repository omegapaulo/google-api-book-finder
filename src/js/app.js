function showErrorToUi() {
  document.querySelector('.book--cards').innerHTML = `
  <div class="errorStyles">
  <h2>There was an error from our side, we will fix it soon. Thank you for your understanding</h2>
  </div>
  `;
  setTimeout(() => {
    document.querySelector('.book--cards').innerHTML = '';
  }, 5000);
}

function clearTimeout() {
  clearTimeout((document.querySelector('.book--cards').innerHTML = ''), 3000);
}

function resetUi() {
  document.querySelector('.book--cards').innerHTML = '';
}

document.querySelector('.header--form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const checkFetch = function (response) {
    if (!response.ok) {
      // console.log(response);
      throw Error(`The status is ${response.status} and check the url ${response.url} to handle errors, this is the error message ${response.statusText}`);
    }
    return response;
  };

  const inputValue = document.querySelector('.search').value;
  try {
    const dataObj = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&maxResults=40&projection=full&printType=books`);
    // const dataObj = await fetch('harrypotter.json');
    checkFetch(dataObj);

    const dataStatus = await dataObj.json();

    dataStatus.items.forEach((book) => {
      const bookInfo = book.volumeInfo;

      if (bookInfo.description !== undefined) {
        document.querySelector('.book--cards').innerHTML += `
        <div class="book--card">
        <img src=${bookInfo.imageLinks.thumbnail} />
        <div>
        <p>${bookInfo.title}</p>
        <ul>
        <li class="book--title">Author: <span>${bookInfo.authors}</span></li>
        <li class="book--author">Publisher: <span>${bookInfo.publisher}</span></li>
        <button  id="btn"><a href="${bookInfo.previewLink}" target="_blank">See this Book</a></button>
        </ul>
        </div>
        <p>${bookInfo.description}</p>
        </div>
        
        `;
      }
      document.querySelector('.search').value = '';
      document.querySelector('.search').addEventListener('keyup', resetUi);
    });
  } catch (error) {
    showErrorToUi();
  }
});
