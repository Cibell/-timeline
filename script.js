
let buttonStart = document.getElementById("start")
let buttonStop = document.getElementById("stop")
let buttonReset = document.getElementById("reset")

let horas = document.getElementById("horas")
let minutos = document.getElementById("minutos")
let segundos = document.getElementById("segundos")
let milissegundos = document.getElementById("milissegundos")

let startTimer
let ms = "00"
let seg = "00"
let min = "00"
let hr = "00"


function start() {

    startTimer = setInterval(function () {
        ms++

        if (ms === 100) {
            seg++

            if (seg < 10) {
                seg = "0" + seg
            }
            ms = 0
        }

        if (seg === 60) {
            min++

            if (min < 10) {
                min = "0" + min
            }
            seg = 0
        }

        if (min === 60) {
            hr++

            if (hr < 10) {
                hr = "0" + hr
            }
            min = 0
        }

        buttonStart.classList.add("ativo")
        buttonStop.classList.remove("ativo")

        atualizarValor()
    }, 10);

}

function stop() {
    clearInterval(startTimer)
    buttonStop.classList.add("ativo")
    buttonStart.classList.remove("ativo")
}
function reset() {
    clearInterval(startTimer)
    ms = "00"
    seg = "00"
    min = "00"
    hr = "00"
    atualizarValor()
    buttonStart.classList.remove("ativo") 
    buttonStop.classList.remove("ativo")
}

function atualizarValor() {
    milissegundos.innerHTML = ms
    segundos.innerHTML = seg
    minutos.innerHTML = min
    horas.innerHTML = hr

}



buttonStart.addEventListener("click", start);
buttonStop.addEventListener("click", stop);
buttonReset.addEventListener("click", reset);