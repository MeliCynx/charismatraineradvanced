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
    let message = document.getElementById("phrase" + String(keynum)).innerText;
    console.log(copyphrase(message));
}

document.addEventListener('keydown', function(ev) {
    console.log(ev.code)
    if (keybinds[ev.code] != undefined && !ev.metaKey) {
        getkeybind(keybinds[ev.code]);
    }
    
})

getkeybind(3);