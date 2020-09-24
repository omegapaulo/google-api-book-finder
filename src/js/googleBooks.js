export default class Books {
  constructor() {
    this.Api_Key = 'AIzaSyAI8eADJA-yI7rgKWLJtfgx7AANFQVa2Bs';
  }

  static checkFetch(response) {
    if (!response.ok) {
      // console.log(response);
      throw Error(`The status is ${response.status} and check the url ${response.url} to handle errors, this is the error message ${response.statusText}`);
    }
    return response;
  }

  async getBooks(book) {
    try {
      this.bookRequests = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=40&projection=full&printType=books&key=${this.Api_Key}`,
      );

      // Checking if request status is ok
      Books.checkFetch(this.bookRequests);

      this.booksInfo = await this.bookRequests.json();

      console.log(this.booksInfo);
    } catch (error) {
      // Log error for the user through ui.js
      console.log(error);
    }
    return this.booksInfo;
  }
}
