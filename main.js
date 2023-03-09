const myIncrement = document.querySelector("#increment");
const myDecrement = document.querySelector("#decrement");
const myValue = document.querySelector("#thisValue");
const saveButton = document.querySelector("#save-btn");

let counter = 0;

myIncrement.addEventListener ("click", () => {
    counter++;
    thisValue.innerHTML = counter;
});

myDecrement.addEventListener ("click", () => {
    counter--;
    thisValue.innerHTML = counter;
});

