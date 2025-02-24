let open = false;
function togglemenu() {
    let button = document.getElementById("menubutt");
    let menu = document.getElementById("menu");
    if (open) {
        button.classList.remove("active");
        menu.classList.remove("active");
    } else {
        button.classList.add("active");
        menu.classList.add("active");
    }
    open = !open;
}
let waiting = false;
let lastpressed;
function waitforkeypress(buttonnum) {
    console.log(buttonnum)
    return new Promise((resolve) => {
        function fun(evkey) {
            console.log(evkey.key)
            if (!evkey.metaKey && (evkey.location == 0 || evkey.location == 3)) {
                document.removeEventListener('keydown', fun)
                lastpressed = evkey;
                resolve();
            }
        }
        document.addEventListener('keydown', fun)
    })

}
async function presskeybindbutton(num) {
    let button = document.getElementById("keyb" + String(num));
    button.parentElement.classList.add("active");
    if (!waiting) {
        waiting = true;
        let oldtext = button.innerHTML;
        button.innerHTML = "input key...";
        await waitforkeypress(num)
        let container = document.getElementById("currentbindcontainer" + String(num));
        console.log(container)
        if (!keybinds[lastpressed.code]) {
            let text = lastpressed.code;
            if (text.substring(0, 3) == "Key") {
                text = text.replace("Key", '');
                text = text.toLowerCase();
            } else if (text.substring(0,5) == "Digit") {
                text = text.replace("Digit", '');
            }
            container.innerText = text;
            document.getElementById("bind" + String(num)).innerText = text;
            setkeybind(Object.values(keybinds).indexOf(num), lastpressed.code);
        }
        button.innerText = oldtext;
        waiting = false;
        console.log(keybinds);
    }
}

function unpresskeybindbutton(num) {
    let button = document.getElementById("keyb" + String(num));
    button.parentElement.classList.remove("active")
}