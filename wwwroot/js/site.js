const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const timeDisplay = document.getElementById('time');

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Set the time display
    timeDisplay.innerText = `Hello world, The time is: ${now.toLocaleTimeString()}`;

    // Rotate the hands
    const secondDeg = ((seconds / 60) * 360);
    const minuteDeg = ((minutes / 60) * 360) + (seconds / 60) * 6;
    const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock right away
