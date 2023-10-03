// DOM Manipulation (STYLING)
// Change the color of the H1 in our index.html
// CSS properties in JS here are written in camelCase

// in line styling only works on a single element unless using a for loop for example 
const title = document.querySelector('#main-heading');
title.style.color = 'red';


// Changing the style of more than one 

const listItems = document.querySelectorAll('.list-items'); // note the . before the className

for (let index = 0; index < listItems.length; index++) {
    listItems[index].style.fontSize = '2rem';
}
