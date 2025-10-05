let timer;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let isRunning = false;

    const timeDisplay = document.getElementById("time");
    const startBtn = document.getElementById("starting");
    const stopBtn = document.getElementById("stoping");
    const resetBtn = document.getElementById("reseting");

    function updateDisplay() {
      let h = hours < 10 ? "0" + hours : hours;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;
      timeDisplay.textContent = `${h}:${m}:${s}`;
    }

    function startTimer() {
      if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
          seconds++;
          if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
              minutes = 0;
              hours++;
            }
          }
          updateDisplay();
        }, 1000);
      }
    }

    function stopTimer() {
      clearInterval(timer);
      isRunning = false;
    }

    function resetTimer() {
      clearInterval(timer);
      isRunning = false;
      seconds = 0;
      minutes = 0;
      hours = 0;
      updateDisplay();
    }

    startBtn.addEventListener("click", startTimer);
    stopBtn.addEventListener("click", stopTimer);
    resetBtn.addEventListener("click", resetTimer);

    // Initialize display
    updateDisplay();