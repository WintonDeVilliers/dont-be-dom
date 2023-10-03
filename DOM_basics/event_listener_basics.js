//EVENT LISTENER

// element.addEventListener("click", function); 

const button2 = document.querySelector('.btn-2');

function alertBtn(){
    alert('I also Love JS');
};

button2.addEventListener("click", alertBtn);


// MouseOver

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor(){
    newBackgroundColor.style.backgroundColor = 'blue';
};

newBackgroundColor.addEventListener("mouseover", changeBgColor);