export default function ({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  controls,
  timer,
  sound,
}) {
  buttonPlay.addEventListener("click", function () {
    sound.pressButton();
    controls.play();
    timer.countdown();
  });

  buttonPause.addEventListener("click", function () {
    sound.pressButton();
    controls.pause();
    timer.hold();
  });

  buttonSet.addEventListener("click", function () {
    sound.pressButton();
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
      timer.reset();
      return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });

  buttonStop.addEventListener("click", function () {
    sound.pressButton();
    controls.reset();
    timer.reset();
  });

  buttonSoundOn.addEventListener("click", function () {
      sound.bgAudio.pause();
      buttonSoundOn.classList.add("hide");
      buttonSoundOff.classList.remove("hide");
    });
    
  buttonSoundOff.addEventListener("click", function () {
      sound.bgAudio.play();
      buttonSoundOn.classList.remove("hide");
      buttonSoundOff.classList.add("hide");
  });

}
