
// Clockjs
function updateClock() {
  const clockElement = document.querySelector('.clock');
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  clockElement.textContent = formattedTime;
}


setInterval(updateClock, 1000);


updateClock();


