// main.js

// TODO
//listen for honk-btn to be pressed
document.getElementById("honk-btn").addEventListener("click",playHonk);

//page refreshes on click
function playHonk(){
    event.preventDefault();
    document.getElementById("horn-sound").play();
}

//listen for changes to volume-number
document.getElementById("volume-number").addEventListener("input", updateVol);

//listen for changes to volume-slider
document.getElementById("volume-slider").addEventListener("change", updateSlider);

//listen for changes to audio selected
document.getElementById("audio-selection").addEventListener("change",updateSound);

//update the sound level and the volume slider
function updateVol(){
    document.getElementById("horn-sound").volume = (document.getElementById("volume-number").value)/100;
    document.getElementById("volume-slider").value = document.getElementById("volume-number").value;
    updateIcon();
}

//update the sound level and the volume number
function updateSlider(){
    //update sound
    document.getElementById("horn-sound").volume = (document.getElementById("volume-slider").value)/100;
    //update number
    document.getElementById("volume-number").value = document.getElementById("volume-slider").value;
    updateIcon();
}

//update the volume icon bar number
function updateIcon(){
    let currVol = (document.getElementById("horn-sound").volume)*100;
    
    if(currVol == 0){
        //no bars
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
    if(currVol > 0 && currVol < 34){
        //1 bar
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    if(currVol > 33 && currVol < 67){
        //two bars
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    if(currVol > 66 && currVol <= 100){
        //three bars
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        document.getElementById("honk-btn").disabled = false;
    }
}

//update the type of audio
function updateSound(){
    //update to air horn
    if(document.getElementById("radio-air-horn").checked){
        document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
    }
    //update to car horn
    if(document.getElementById("radio-car-horn").checked){
        document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    }
    //update to party horn
    if(document.getElementById("radio-party-horn").checked){
        document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
    }
}