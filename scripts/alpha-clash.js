
const continueGame = () => {
    // get the alphabet
    const alphabet = getRandomAlphabet()

    // show the alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set background Color
    setBackgroundColor(alphabet)
}

const play = () => {
    hideElementById('home-screen', 'hidden')
    showSectionById('playground-screen', 'hidden');
    continueGame();
}