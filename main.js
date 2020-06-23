// http://websamuraj.pl/examples/js/projekt11/
const btnStart = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');
const clock = document.querySelector('div.time div');

//Parametry
let startStop = false;
let timer;
let seconds = 0;
let comaSeconds = 0;

//Implementacja
//Obsługa przycisku startStop
const stoper = () => {
    //Zmiana flagi
    startStop = !startStop;
    if (startStop) {
        //start stopera
        btnStart.textContent = "Pauza";
        timer = setInterval(() => {
            comaSeconds++;
            if (comaSeconds == 100) {
                seconds++;
                comaSeconds = 0;
            }
            clock.textContent = `${seconds},${comaSeconds < 10 ? '0' + comaSeconds : comaSeconds}`;
        }, 10)
    } else {
        //zatrzymanie stopera
        btnStart.textContent = "Start";
        clearInterval(timer);
    }
}

//Reset stopera
const stoperReset = () => {
    if (!startStop) {
        seconds = 0;
        comaSeconds = 0;
        clock.textContent = "---";
    } else {
        alert('Aby zresetować stoper musisz go zatrzymać!');
    }
}

btnStart.addEventListener('click', stoper)
btnReset.addEventListener('click', stoperReset)