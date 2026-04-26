// future scope:
// const coreCount = navigator.hardwareConcurrency;
// console.log(`System has ${coreCount} logical cores!`)

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');

const btn = document.getElementById('startButton');

btn.addEventListener('click', () => {
    // resetting the boxes
    box1.classList.remove('loaded');
    box2.classList.remove('loaded');
    box3.classList.remove('loaded');

    // resetting labels not significant actually they will never show up (unless i add a second Reset button to bring everything back
    // as it will be when you refresh page)
    // label1.textContent = "Default";
    // label2.textContent = "Default";
    // label3.textContent = "Default";

    // state management for the labels on the top for each box
    // i wanted to put them right before each setTimeout but it doesnt really matter because JS runs at around 3 GHz
    // so fast that any discrepancies like this (Loading... label came before the timer actually started for each box) is insignificant
    // hence by design choice all state changes kept together at upper level
    label1.textContent = "Loading...";
    label2.textContent = "Loading...";
    label3.textContent = "Loading...";

    // keep button disabled until the last box finishes loading
    btn.disabled = true;
    btn.textContent = "Wait...";

    // setTimeout unit of time is in miliseconds: thing to remember
    setTimeout(() => {
        box1.classList.add('loaded');
        label1.textContent = "Loaded";
    }, 50);

    setTimeout(() => {
        box2.classList.add('loaded');
        label2.textContent = "Loaded";
    }, 100);

    setTimeout(() => {
        box3.classList.add('loaded');
        label3.textContent = "Loaded";

        // re-enabled and UX improvement to allow them to Go Again
        btn.disabled = false;
        btn.textContent = "Go Again";
    }, 800);
})