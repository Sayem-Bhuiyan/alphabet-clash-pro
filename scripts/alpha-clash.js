
const handleKeyboardKeyUp = (event) => {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed)
    
    // get the expected key to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase()
    // console.log(playerPressed, expectedAlphabet)

    // checked match or not
    if(playerPressed === expectedAlphabet){
        // increase the score
        const currentScore = getScoreById('score');
        
        const newScore = currentScore + 1;
        setScoreById('score', newScore);

        // start a new round
        continueGame()
        removeBackgroundColorById(expectedAlphabet);

    } 
    else{
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentlife = parseInt(currentLifeText);

        // const newCurrentLife = currentlife - 1;
        // currentLifeElement.innerText = newCurrentLife;
        const currentLife = getScoreById('current-life');
        const newLife = currentLife - 1;
        setScoreById('current-life' ,newLife)
        if(newLife === 0){
           gameOver()
        }
    }
}
document.addEventListener('keyup', handleKeyboardKeyUp)


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
    // hide everything only show play ground
    hideElementById('home-screen', 'hidden')
    showSectionById('playground-screen', 'hidden');
    hideElementById('game-end', 'hidden')

    // set score and life to the default
    setScoreById('current-life',  5)
    setScoreById('score', 0)
    
    // continue the game
    continueGame();
}

const gameOver = () => {
    hideElementById('playground-screen', 'hidden')
    showSectionById('game-end', 'hidden')
    const totalScore = getScoreById('score');
    setScoreById('total-score', totalScore);
}