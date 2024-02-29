import _ from 'lodash';

const createLibrary = () => [];
const addBook = (library, bookName, authorName, year, genre, pageAmount) => {
  const book = {};
  book.bookName = bookName;
  book.authorName = authorName;
  book.year = year;
  book.genre = genre;
  book.pageAmount = pageAmount;
  library.push(book);
};

const findBooksByAuthor = (library, authorName) => {
  const result = [];
  library
    .map((book) => {
      if (book.authorName === authorName) {
        result.push(book);
      }

      return 0;
    });

  return result;
};

const filterBooksByGenre = (library, genre) => {
  const result = library
    .sort((firstBook, secondBook) => {
      const firstGenre = firstBook.genre;
      const secondGenre = secondBook.genre;

      if ((firstGenre === genre) && (secondGenre === genre)) {
        return 0;
      }

      return firstBook.genre === genre ? -1 : 1;
    });

  return result;
};

const filterByYear = (library) => {
  const result = library
    .sort((book1, book2) => {
      const firstYear = book1.year;
      const secondYear = book2.year;

      if (firstYear === secondYear) {
        return 0;
      }

      return firstYear > secondYear ? 1 : -1;
    });

  return result;
};

const averagePagesReport = (library) => {
  let result = 0;

  library
    .map((book) => {
      result += book.pageAmount;
      return 0;
    });

  return (result / library.length);
};

const removeBook = (library, bookName) => {
  library
    .map((book) => {
      if (book.bookName === bookName) {
        _.remove(library, book);
      }

      return 0;
    });
};

const getGenresReport = (library) => {
  const result = {};

  library
    .map((book) => {
      if (result[book.genre] !== undefined) {
        result[book.genre] += 1;
        return 0;
      }

      result[book.genre] = 1;
      return 0;
    });

  return result;
};

export {
  createLibrary, addBook, findBooksByAuthor, filterBooksByGenre, filterByYear, averagePagesReport,
  removeBook, getGenresReport,
};
