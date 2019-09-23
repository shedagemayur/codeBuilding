setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date();
    const secoundRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secoundRatio + currentDate.getMinutes()) / 60;
    const hourdRatio = (minuteRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secoundRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourdRatio);
}

function setRotation(element, rotationRation) {
    element.style.setProperty('--rotation', rotationRation * 360);
}

setClock();