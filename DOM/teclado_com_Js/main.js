// get all keys
const keys = document.querySelectorAll(".key")
// play notes
function playNote(event) {

    // keyCode
    let audioKeyCode = getKeyCode(event);


// typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

// if key exists
    const isKeyExists = key
    if(!isKeyExists) {
        return
    }

// play audio
addPlayingClass(key)
playAudio(audioKeyCode)
}

function addPlayingClass(key) {
    key.classList.add("playing")

}

function getKeyCode(event) {
    let keyCode;
    
    const isKeyboard = event.type === "keydown"  // true or false
    if(isKeyboard) {
    keyCode = event.keyCode
    } else {
    keyCode = event.target.dataset.key
    }

    return keyCode;
    
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function removePlayClass(event) {
    event.target.classList.remove("playing")
}

function registerEvents() {
    // click with mouse
    keys.forEach( function(key) {
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePlayClass)
    })

    // keyboard type 

    window.addEventListener("keydown", playNote) 

}

window.addEventListener("load", registerEvents)