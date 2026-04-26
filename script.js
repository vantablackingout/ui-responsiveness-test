// future scope:
// const coreCount = navigator.hardwareConcurrency;
// console.log(`System has ${coreCount} logical cores!`)

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

const btn = document.getElementById('startButton');

btn.addEventListener('click', () => {
    // resetting the boxes
    box1.classList.remove('loaded');
    box2.classList.remove('loaded');
    box3.classList.remove('loaded');

    // setTimeout unit of time is in miliseconds: thing to remember
    setTimeout(() => {
        box1.classList.add('loaded');
    }, 50);
    setTimeout(() => {
        box2.classList.add('loaded');
    }, 100);
    setTimeout(() => {
        box3.classList.add('loaded');
    }, 800);
})