let counter = 0;

const counterDisplay = document.getElementById("counter");

const incrementbtn = document.getElementById("increment");
incrementbtn.addEventListener("click", () => {
    // counter++;
    // counterDisplay.textContent = counter;
    incrementbtn.innerHTML = parseInt(counterDisplay.innerHTML) + 1;
});

const decrementbtn = document.getElementById("decrement");
decrementbtn.addEventListener("click", () => {
    counter--;
    counterDisplay.textContent = counter;
});