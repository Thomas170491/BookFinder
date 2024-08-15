import {
    flattenObjectValuesIntoArray,
    structureBookAsHtml,
    renderBooksToDom,
  } from "./helper.js";
  import books from "./bookList.js";
  
  // Click handler for search button
  const captureSearchValue = () => {
    const searchInput = document.getElementById("search-bar").value;
    console.log(searchInput);
    return searchInput;
  };
  
  // Filter books based on search input
  const filterBooks = (searchStr, listOfBooks) => {
    const flattenedBooks = flattenObjectValuesIntoArray(listOfBooks);
    return listOfBooks.filter((book, index) => {
      return flattenedBooks[index].some((value) => value === searchStr);
    });
  };
  
  // Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js`
  const structureBooksAsHtml = (bookList) => {
   return bookList.map((book) => structureBookAsHtml(book))
  };
  
  // Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
  const searchBtnClickHandler = (arrOfBooks) => {
    const search = captureSearchValue()
    const filteredList = filterBooks(search,arrOfBooks)
    const html = structureBooksAsHtml(filteredList)
    renderBooksToDom(html)
  };
  
  // Grab search button from the DOM
  const searchBtn = document.getElementById('search-btn')
  // Attach an event listener to the search button
  searchBtn.addEventListener("click", () => {
    searchBtnClickHandler(books);
  });
  