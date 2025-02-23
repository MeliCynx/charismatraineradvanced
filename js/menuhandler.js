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