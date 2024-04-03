let warningText = document.querySelectorAll("h3")[0];
let primoDiv = document.getElementById("primoDivision");
let baraAudio = document.getElementById("baraAudio");
let chipiAudio = document.getElementById("chipiAudio");
let counter = 0;

function whyDidYouClick() {
    counter++;
    if(counter === 1) {
        warningText.textContent = "LAST WARNING...";
    }
    if(counter === 2) {
        warningText.textContent = "Ok, for real LAST WARNING!"
    }
    if(counter === 3) {
        warningText.textContent = "I TOLD YOU NOT TO NOW YOU FACE CONSEQUENCES"
        primoDiv.removeAttribute("hidden");
        baraAudio.volume = 0.3;
        baraAudio.play();
        chipiAudio.play();
    }
}

function reset() {
    warningText.textContent = "";
    primoDiv.setAttribute("hidden", "hidden");
    baraAudio.pause();
    baraAudio.currentTime = 0;
    chipiAudio.pause();
    chipiAudio.currentTime = 0;
    counter = 0;
}