/* EVENT DELEGATION
It allows users to append a SINGLE event listener to a parent element that adds it to all of its
present AND future descendants that match a selector.
*/


//It allows users to append a SINGLE event listener to a parent element that adds it to all of its present...
document.querySelector("#sports").addEventListener("click", function(e){

    console.log(e.target.id + 'is clicked');

    const target = e.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'lightgrey';
    }
})

//  ....AND future descendants that match a selector.
const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);