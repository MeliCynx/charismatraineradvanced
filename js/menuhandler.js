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
        button.innerHTML = "input key...";
        await waitforkeypress(num)
        let container = document.getElementById("currentbindcontainer" + String(num));
        console.log(container)
        container.innerText == lastpressed.key;

    }
}

function unpresskeybindbutton(num) {
    let button = document.getElementById("keyb" + String(num));
    button.parentElement.classList.remove("active")
}