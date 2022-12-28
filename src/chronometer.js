class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId = null;
    
  }

  start(printTimeCallback) {

    const canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");

    const oneCurrentTime = currentTime ++;

    this.currentTime = currentTime;

    intervalId = setInterval(() => {
      oneCurrentTime.printTimeCallback()
      }, 1)

 // ...

  }

  getMinutes() {

    const min = (currentTime / 60);
    const count = Math.floor(min);

    return min
    
  }

  getSeconds() {

    const sec = currentTime - (min * 60)

    return sec

  }

  computeTwoDigitNumber(value) {
    
    secString = sec.slice();
    minString = min.slice();

  }

  stop() {

    clearInterval(this.intervalId);
    
  }

  reset() {

    const canvas = document.getElementById("canvas").reset();
    
    button.onclick = this.reset;
  }

  

  split() {
    
  }
}
