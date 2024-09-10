


const display = document.getElementById("display");

function appendToDisplay(input){
    if (display.value.length < 21) {
        display.value += input;
      } else {
        alert("Maximum input length reached");
    }
}

function clearDisplay(){
    display.value = "";
}

function deleteValue(){
    display.value = display.value.slice(0,-1);
}

function calculate() {
    try {
      display.value = eval(display.value); 
    } catch (e) {
      display.value = 'Error'; 
    }
}


// dark mode

function changeState(){
    const fullScreen = document.getElementById("screen");
    fullScreen.classList.toggle('dark');
    fullScreen.classList.toggle('light');
}