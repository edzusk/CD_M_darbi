console.log('Ready for coding');

const levelSelector = document.querySelectorAll<HTMLInputElement>('.btn-level');
const gameField = document.querySelector('.gameField');
const reset = document.querySelector('.reset');
// const timer = document.querySelector('.timer');
const getCards = () => document.querySelectorAll('.card');
const getFaces = () => document.querySelectorAll('.face');
const getBacks = () => document.querySelectorAll('.back');
let cards = getCards();
let faces = getFaces();
let backs = getBacks();
// let gameStop = false;

const cardBacks:{[key:string]:string} = {
  boy: './assets/images/boy.png',
  camel: './assets/images/camel.png',
  deer: './assets/images/deer.png',
  eagle: './assets/images/eagle.png',
  fox: './assets/images/fox.png',
  horse: './assets/images/horse.png',
  kangaroo: './assets/images/kangaroo.png',
  penguin: './assets/images/penguin.png',
  pig: './assets/images/pig.png',
  polar_bear: './assets/images/polar_bear.png',
  python: './assets/images/python.png',
  sloth: './assets/images/sloth.png',
};
const cardFace = './assets/images/card_face.png';
const cardBackKeys: string[] = Object.keys(cardBacks);
let fieldSize = 0;
let randomKeyNumbers: number[] = [];
let openedCards = 0;
let firstOpenedCardValue = '';
let firstOpenedCardIndex: number;
let secondOpenedCardValue = '';
let secondOpenedCardIndex: number;
let guessedCards: number[] = [];
let points = 0;
// let time = setInterval(() => (0));
// let currentTime = 0;
const getRandomKeyNumbers = () => {
  for (let i = 0; i < fieldSize / 2; i += 1) {
    const randnum = Math.floor(Math.random() * cardBackKeys.length);
    if (randomKeyNumbers.includes(randnum)) {
      i -= 1;
    } else {
      randomKeyNumbers.push(randnum);
      randomKeyNumbers.push(randnum);
    }
  }
  randomKeyNumbers = randomKeyNumbers.sort(() => 0.5 - Math.random());
};

reset.addEventListener('click', () => {
  document.querySelector('.levelSelector').classList.remove('hidden');
  document.querySelector('.gameField').classList.add('hidden');
  document.querySelector('.win').classList.add('hidden');
  gameField.innerHTML = '';
  fieldSize = 0;
  randomKeyNumbers = [];
  openedCards = 0;
  firstOpenedCardValue = '';
  firstOpenedCardIndex = NaN;
  secondOpenedCardValue = '';
  secondOpenedCardIndex = NaN;
  guessedCards = [];
  // gameStop = true;
});
const hideShow = () => {
  document.querySelector('.levelSelector').classList.add('hidden');
  document.querySelector('.gameField').classList.remove('hidden');
};
const flipCard = (ind:number) => {
  faces = getFaces();
  backs = getBacks();
  faces[ind].classList.add('hidden');
  backs[ind].classList.remove('hidden');
};
const flipCardBack = (ind:number) => {
  faces = getFaces();
  backs = getBacks();
  faces[ind].classList.remove('hidden');
  backs[ind].classList.add('hidden');
};

const hideWrongGuess = () => {
  cards.forEach((el, i) => {
    if (!guessedCards.includes(i)) {
      flipCardBack(i);
    }
  });
};

const drawFiled = () => {
  for (let i = 0; i < fieldSize; i += 1) {
    gameField.innerHTML += `<div class="card"><img class="wrapper back hidden" src="${cardBacks[cardBackKeys[randomKeyNumbers[i]]]}"><img class="wrapper face" src="${cardFace}" alt="parrot"></div>`;
  }
};

// const startTimer = () => {
//   let i = 0;
//   clearInterval(time);
//   time = setInterval(() => {
//     if (i <= 999) {
//       currentTime = i;
//       i += 1;
//     }
//   }, 1000);
// };

// const formatTime = (t:number) => {
//   const min = Math.floor(t / 60);
//   const sec = t % 60;
//   return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
// };

const winCheck = () => {
  if (guessedCards.length === fieldSize) {
    console.log('WIN WIN WIN');
    document.querySelector('.gameField').classList.add('hidden');
    document.querySelector('.win').classList.remove('hidden');
    // clearInterval(time);
    if (fieldSize === 6) {
      points += 1;
    } else if (fieldSize === 12) {
      points += 3;
    } else {
      points += 5;
    }
    // gameStop = true;
  }
};
const updateScore = () => {
  document.querySelector('.points').innerHTML = `Score: ${points}`;
};

// And here starts game :)
levelSelector.forEach((el, i) => {
  levelSelector[i].addEventListener('click', () => {
    fieldSize = (+levelSelector[i].value);
    const colSize = i === 0 ? 'col-4' : i === 1 ? 'col-3' : 'col-2';
    // startTimer();
    getRandomKeyNumbers();
    hideShow();
    drawFiled();
    getCards().forEach((card) => card.classList.add(colSize));
    cards = getCards();
    // gameStop = false;

    cards.forEach((card, ind) => {
      cards[ind].addEventListener('click', () => {
        if (openedCards === 2) {
          hideWrongGuess();
          openedCards = 0;
          firstOpenedCardValue = '';
          secondOpenedCardValue = '';
        }
        if (firstOpenedCardIndex !== ind) {
          openedCards += 1;
          flipCard(ind);
          if (openedCards === 1) {
            firstOpenedCardValue = cardBackKeys[randomKeyNumbers[ind]];
            firstOpenedCardIndex = ind;
          }
          if (openedCards === 2) {
            secondOpenedCardValue = cardBackKeys[randomKeyNumbers[ind]];
            secondOpenedCardIndex = ind;
          }
          if (firstOpenedCardValue === secondOpenedCardValue) {
            openedCards = 0;
            guessedCards.push(firstOpenedCardIndex);
            guessedCards.push(secondOpenedCardIndex);
            firstOpenedCardValue = '';
            secondOpenedCardValue = '';
          }
          winCheck();
          updateScore();
        }
      });
    });
  });
});
