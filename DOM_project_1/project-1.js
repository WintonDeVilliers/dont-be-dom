// VARIABLES
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [{
    quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    person: "John Woods"
},{
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    person: "Martin Fowler AKA Uncle Bob"
},{
    quote: "Give a man a program, frustrate him for a day.Teach a man to program, frustrate him for a lifetime.",
    person: "Muhammad Waseem"
},{
    quote: "Programming is a continues learning journey, software always have new updates, and so shall we update ourselves too",
    person: "Abdelrahman Dwedar"
},{
    quote: "Developer is an organism that turns coffee into code",
    person: "Unknown"
},{
    quote: "First, solve the problem. Then write the code",
    person: "John Johnson"
},{
    quote: "Everybody in this country should learn to program a computer, because it teaches you how to think",
    person: "Steve Jobs"
},];


btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})