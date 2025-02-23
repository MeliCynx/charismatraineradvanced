window.onload = function(){
    function fun(dir) {
        return new Promise((resolve) => {
            let p = document.createElement("script");
            p.setAttribute("async", "");
            p.src = dir;
            p.onload = () => resolve(p);
            p.onerror = function() {
                location.reload;
            }
            document.head.appendChild(p);
            console.log(dir);
        });
    }
    async function init() {
        fun("/js/keybinds.js")
        fun("/js/menuhandler.js")
        console.log("all scripts loaded!")
    }
    init();

}