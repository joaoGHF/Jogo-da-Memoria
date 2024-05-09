document.addEventListener('DOMContentLoaded', () => {
    // Opções de cartas
    const cards = [
        {
            name: 'android',
            img: 'images/android.png'
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
            name: 'stackoverflow',
            img: 'images/stackoverflow.png'
        },

        {
            name: 'linux',
            img: 'images/linux.png'
        },
        
        {
            name: 'github',
            img: 'images/github.png'
        },

        // repeat

        {
            name: 'android',
            img: 'images/android.png'
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
            name: 'stackoverflow',
            img: 'images/stackoverflow.png'
        },

        {
            name: 'linux',
            img: 'images/linux.png'
        },

        {
            name: 'github',
            img: 'images/github.png'
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
    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/board.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            board.appendChild(card);
        }
    }

    // checagem de combinações
    function checkForMatch() {
        const cards= document.querySelectorAll('img');
        const optionOneld = cardsChosen[0];
        const optionTwold = cardsChosen[1];

        // cerificar clique na mesma imagem
        if (optionOneld == optionTwold) {
            cards[optionOneld].setAttribute('src', 'images/board.png');
            cards[optionTwold].setAttribute('src', 'images/board.png');
            alert('Você clicou na mesma imagem');
        }

        // verificar combinação se click em imagens diferetes
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('Você encontrou uma combinação');
            cards[optionOneld].setAttribute('src', 'images/check.png');
            cards[optionTwold].setAttribute('src', 'images/check.png');
            cards[optionOneld].removeEventListener('click', flipCard);
            cards[optionTwold].removeEventListener('click', flipCard);

            cartsWon.push(cardsChosen);
        } else {
            cards[optionOneld].setAttribute('src', 'image/board.png');
            cards[optionTwold].setAttribute('src', 'image/board.png');
            alert('Errou, tente novamente');
        }

        cardsChosen = [];
        cardsChosenId = [];

        // mostrar placar
        resultView.textContent = 'Pares Encontrados: ' + cardsWon.length;

        if (cardsWon.length === (cards.length / 2)) {
            resultView.textContent = 'Parabens! Você conseguiu encontrar todas as cartas';
        }
    }

    // Virar as cartas 
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cards[cardId].img);

        if (cardsChosen === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();

});