//Creating ELEMENTS

const ul = document.querySelector('ul');
const li = document.createElement('li');
// add elements into the document
ul.append(li);

//modifying the text

//const firstListItem = document.querySelector('.list-items');
//console.log(firstListItem.innerHTML);  // can be security problem be carful with use , for example you dont want user inputs to show in innerHtml
//console.log(firstListItem.textContent);
//console.log(firstListItem.innerText); // in most cases we use this

li.innerText = "ELI";



// Modifying Elements Attributes & Classes
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');


// Classes
li.classList.add('list-items');
li.classList.remove('list-items');
console.log(li.classList.contains('list-items'));

//remove element
li.remove()
