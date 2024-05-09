document.addEventListener('DOMContentLoaded', () => {
    // Opções de cartas
    const cards = [
        {
            name: 'android',
            img: 'images/android.png'
        },
        
        {
            name: 'board',
            img: 'images/board.png'
        },

        {
            name: 'check',
            img: 'images/check.png'
        },

        {
            name: 'chrome',
            img: 'images/chrome.png'
        },

        {
            name: 'git',
            img: 'images/git.png'
        },

        {
            name: 'github',
            img: 'images/github.png'
        },

        {
            name: 'linux',
            img: 'images/linux.png'
        },

        {
            name: 'stackoverflow',
            img: 'images/stackoverflow.png'
        }
    ];

    // Embaralhar todas as cartas
    cards.sort(() => 0.5 - Math.randon());

    // Recuperar elementos
    const board = document.querySelector('.board');
    const resultView = document.querySelector('#Result');
    let cardsChosen = [] // cartas escolhidas
    const cardsChosenId = [] // ids das cartas escolhidas para caso de click na mesma imagem 
    const cardsWon = [] // cartas combinadas

    // criar o quadro de cartas
    function creteBoard() {
        for (let i = 0; i < cards.length; i++) {
            const card = document.
            
        }
    }
});