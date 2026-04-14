const board = document.getElementById("gameBoard");
const timeEl = document.getElementById("time");
const matchEl = document.getElementById("matches");
const restartBtn = document.getElementById("restart");

/* Card Symbols (Pairs) */
const symbols = ["🍎","🍌","🍇","🍓","🍒","🥝","🍍","🍉"];

let cards = [];
let flippedCards = [];
let matches = 0;
let time = 0;
let timer;

/* Shuffle Function */
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

/* Start Timer */
function startTimer() {
    clearInterval(timer);
    time = 0;
    timer = setInterval(() => {
        time++;
        timeEl.innerText = time;
    }, 1000);
}

/* Create Game Board (DOM Creation) */
function createBoard() {
    board.innerHTML = "";
    matches = 0;
    matchEl.innerText = matches;

    const gameCards = shuffle([...symbols, ...symbols]);

    gameCards.forEach(symbol => {

        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.symbol = symbol;
        card.innerText = "?";

        /* Click Event */
        card.addEventListener("click", flipCard);

        board.appendChild(card);
    });

    startTimer();
}

/* Flip Card Logic */
function flipCard() {

    if (
        this.classList.contains("flip") ||
        this.classList.contains("matched") ||
        flippedCards.length === 2
    ) return;

    this.classList.add("flip");
    this.innerText = this.dataset.symbol;

    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

/* Check Matching */
function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.symbol === card2.dataset.symbol) {

        card1.classList.add("matched");
        card2.classList.add("matched");

        matches++;
        matchEl.innerText = matches;

        flippedCards = [];

        if (matches === symbols.length) {
            clearInterval(timer);
            setTimeout(() => {
                alert("🎉 You won in " + time + " seconds!");
            }, 300);
        }

    } else {
        setTimeout(() => {
            card1.classList.remove("flip");
            card2.classList.remove("flip");

            card1.innerText = "?";
            card2.innerText = "?";

            flippedCards = [];
        }, 800);
    }
}

/* Restart Button Event */
restartBtn.addEventListener("click", createBoard);

/* Initial Start */
createBoard();