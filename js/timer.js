import Sounds from "./sounds.js";

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let minutes = Number(minutesDisplay.textContent);
  let timerTimeOut;
 
  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;

    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
    updateMinutes(minutes);
  }

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if (isFinished) {
        resetControls()
        updateDisplay()
        Sounds().timeIsUp()
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));
      countdown();
    }, 1000);
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  return {
    countdown,
    reset,
    hold,
    updateDisplay,
    updateMinutes,
  }  
}