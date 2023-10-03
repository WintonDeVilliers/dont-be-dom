/* 
Event Probagation: refers to how an event travels through the DOM TREE 
is also the "umbrella term" used to refer to 3 phases 
1. Capturing : starts from the root and travels up to the target
2. Target
3. Event Bubbling : travels back up to the root

*/

window.addEventListener("click", function(){
    console.log('Window');
}, true);

document.addEventListener("click", function(){
    console.log('Document');
}, true);

document.querySelector(".div2").addEventListener("click", function(){
    console.log("DIV 2");
}, true);

// HOW TO STOP PROBAGATION
// document.querySelector(".div2").addEventListener("click", function(e){
//     e.stopPropagation()
//     console.log("DIV 2");
// }, true);

// HOW TO HAVE EVENT FIRE ONLY ONCE
// document.querySelector(".div2").addEventListener("click", function(e){
//     console.log("DIV 2");
// },{once: true});


document.querySelector(".div1").addEventListener("click", function(){
    console.log('DIV 1');
}, true);

document.querySelector("button").addEventListener("click", function(e){
    console.log(e);
    //console.log(e.target); //will show the target
    //console.log(e.target.innerText = 'clicked!'); // will change the text of the target to clicked

}, true);

// To show the bubbling phase in the console we would change the true values above to false and the previous output will be displayed in reverse