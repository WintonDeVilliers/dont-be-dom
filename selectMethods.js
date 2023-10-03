/* FIVE MAIN ways/methods for selecting elements in the DOM*/


// `getElementById()` is a JavaScript method to find and select an HTML element by its unique `id` attribute.
const title = document.getElementById('main-heading');
console.log(title);


// `getElementsByClassName()` is a JavaScript method used to select multiple HTML elements based on their shared class name.
const listItems = document.getElementsByClassName('list-items');
console.log(listItems);


// `getElementsByTagName()` is a JavaScript method used to select multiple HTML elements by their tag name, like `<div>` or `<p>`.

const listItemsByTag = document.getElementsByTagName('li');
console.log(listItemsByTag);



/* querySelector() is a JavaScript method that allows you to select and retrieve 
the first HTML element that matches a specified CSS selector within a document.
It returns the selected element or null if no matching element is found*/
// find the first match within the DOM TREE
const container = document.querySelector('div');
console.log(container);


// // querySelectorAll()
const containerMoviesAndSports = document.querySelectorAll('div');
console.log(containerMoviesAndSports);


















