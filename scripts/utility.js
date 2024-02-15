// hide any section by id
const hideElementById = (elementId, className) => {
    const element = document.getElementById(elementId);
    element.classList.add(className)
}

// show section by id
const showSectionById = (elementId, className) => {
    const element = document.getElementById(elementId);
    element.classList.remove(className)
}

const setBackgroundColor = (elementId) => {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]')
}

const getRandomAlphabet = () => {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alpahabets = alphabetString.split('');
    console.log(alpahabets);
    
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alpahabets[index];
    return alphabet;
}