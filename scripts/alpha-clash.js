const play = () => {
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden')

    const playgroundScreen = document.getElementById('playground-screen')
    playgroundScreen.classList.remove('hidden')
}