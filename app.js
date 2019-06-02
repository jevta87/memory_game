const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
function flipCard() {
    if (lockBoard) return;

    this.classList.add('flip');
    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    //second click
    hasFlippedCard = false;
    secondCard = this;
    //card matching
    check();

}
function check() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disable_cards() : unflipCards();
}
function disable_cards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}
function unflipCards() {
    lockBoard = true;
    //not a match
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 1000);

}
(function shuffle() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition
    });
})();
cards.forEach(card => card.addEventListener('click', flipCard));