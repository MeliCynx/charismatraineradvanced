let keybinds = {
    "Digit1": 1,
    "Digit2": 2,
    "Digit3": 3,
    "Digit4": 4,
    "Digit5": 5,
    "Digit6": 6,
    "Digit7": 7,
    "Digit8": 8
}
const maxnum = 8;

async function copyphrase(phrase) {
    let success = await navigator.clipboard.writeText(phrase);
    console.log(phrase)
    return success
}

function getkeybind(keynum) {
    console.log(keynum);
    console.log(maxnum);
    keynum = Math.max(Math.min(maxnum, keynum), 1);
    let element = document.getElementById("phrase" + String(keynum));
    let message = element.innerText;
    element.parentElement.classList.add("active")
    console.log(copyphrase(message));
}
function removeclick(keynum) {
    let element = document.getElementById("phrase" + String(keynum));
    element.parentElement.classList.remove("active");
}


document.addEventListener('keydown', function(ev) {
    if (keybinds[ev.code] != undefined && !ev.metaKey) {
        getkeybind(keybinds[ev.code]);
    }
    
})
document.addEventListener('keyup', function(ev) {
    if (keybinds[ev.code] != undefined && !ev.metaKey) {
        removeclick(keybinds[ev.code])
    }
})