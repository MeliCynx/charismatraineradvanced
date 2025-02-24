const cookname_keybinds = "keybinds";
let keybinds = JSON.parse(getCookie(cookname_keybinds));
if (keybinds == null) {
    keybinds = {
        "Digit1": 1,
        "Digit2": 2,
        "Digit3": 3,
        "Digit4": 4,
        "Digit5": 5,
        "Digit6": 6,
        "Digit7": 7,
        "Digit8": 8
    }
    setCookie(cookname_keybinds, JSON.stringify(keybinds), 400)
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
function setkeybind(keynum, new_key) {
    let old_key = Object.keys(keybinds)[keynum];
    Object.defineProperty(keybinds, new_key,
        Object.getOwnPropertyDescriptor(keybinds, old_key));
    delete keybinds[old_key];
    setCookie(cookname_keybinds, JSON.stringify(keybinds), 400)
}

function removeclick(keynum) {
    let element = document.getElementById("phrase" + String(keynum));
    element.parentElement.classList.remove("active");
}


document.addEventListener('keydown', function(ev) {
    if (keybinds[ev.code] != undefined && !ev.metaKey && !ev.repeat) {
        getkeybind(keybinds[ev.code]);
    }
    
})
document.addEventListener('keyup', function(ev) {
    if (keybinds[ev.code] != undefined && !ev.metaKey && !ev.repeat) {
        removeclick(keybinds[ev.code])
    }
})
console.log(keybinds)
for (x=0; x<Object.keys(keybinds).length; x++) {
    let text = Object.keys(keybinds)[x];
    if (text.substring(0, 3) == "Key") {
        text = text.replace("Key", '');
        text = text.toLowerCase();
    } else if (text.substring(0,5) == "Digit") {
        text = text.replace("Digit", '');
    }
    document.getElementById("bind" + String(keybinds[Object.keys(keybinds)[x]])).innerHTML = text;
    document.getElementById("currentbindcontainer" + String(keybinds[Object.keys(keybinds)[x]])).innerHTML = text;
}
