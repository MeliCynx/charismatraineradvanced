const randomquotes = [
    "I think you're my best friend!",
    "is this thing on?",
    "When it rains it pours.",
    "When we were young, I played the drums, I think I thought about you some",
    "It's true, I'm getting used to hating myself.",
    "I believe, I believe in nothing!",
    "Gar..,"
]

function getrandom(max) {
    return Math.floor(Math.random()*max)
}

let quotes = document.getElementById("quote")
quotes.innerHTML = randomquotes[getrandom(randomquotes.length)]