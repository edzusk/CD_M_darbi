console.log('Ready for coding');

const levelSelector = document.querySelectorAll<HTMLInputElement>('.btn-level');
const gameField = document.querySelector('.gameField');
const getCards = () => document.querySelectorAll('.card');
const reset = document.querySelector('.reset');
let cards = getCards();

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
const keys: string[] = Object.keys(cardBacks);
let fieldSize = 0;
let randomkeys: number[] = [];
let counter = 0;
let card1 = '';
let card1Num: number;
let card2 = '';
let card2Num: number;
let guessedCards: number[] = [];
const getRandomkeys = () => {
  for (let i = 0; i < fieldSize / 2; i += 1) {
    const randnum = Math.floor(Math.random() * keys.length);
    if (randomkeys.includes(randnum)) {
      i -= 1;
    } else {
      randomkeys.push(randnum);
      randomkeys.push(randnum);
    }
  }
  randomkeys = randomkeys.sort(() => 0.5 - Math.random());
};
const winCheck = ()=> {
    
}
reset.addEventListener('click', () => {
  document.querySelector('.levelSelector').classList.remove('hidden');
  document.querySelector('.gameField').classList.add('hidden');
  gameField.innerHTML = '';
  fieldSize = 0;
  randomkeys = [];
  counter = 0;
  card1 = '';
  card1Num = NaN;
  card2 = '';
  card2Num = NaN;
  guessedCards = [];
});
const hideShow = () => {
  document.querySelector('.levelSelector').classList.add('hidden');
  document.querySelector('.gameField').classList.remove('hidden');
};

const resetCardFaces = () => {
  cards.forEach((el, i) => {
    if (!guessedCards.includes(i)) {
      el.innerHTML = `<img class="wrapper" src="${cardFace}">`;
    }
  });
};

const drawFiled = () => {
  for (let i = 0; i < fieldSize; i += 1) {
    gameField.innerHTML += `<div class="card"><img class="wrapper" src="${cardFace}" alt="parrot"></div>`;
  }
};
levelSelector.forEach((el, i) => {
  levelSelector[i].addEventListener('click', () => {
    fieldSize = (+levelSelector[i].value);
    const colSize = i === 0 ? 'col-4' : i === 1 ? 'col-3' : 'col-2';
    hideShow();
    drawFiled();
    getCards().forEach((card) => card.classList.add(colSize));
    cards = getCards();
    getRandomkeys();

    cards.forEach((card, ind) => {
      cards[ind].addEventListener('click', () => {
        if (counter === 2) {
          resetCardFaces();
          counter = 0;
          card1 = '';
          card2 = '';
        }
        counter += 1;
        cards[ind].innerHTML = `<img class="wrapper" src="${cardBacks[keys[randomkeys[ind]]]}">`;
        if (counter === 1) {
          card1 = keys[randomkeys[ind]];
          card1Num = ind;
        }
        if (counter === 2) {
          card2 = keys[randomkeys[ind]];
          card2Num = ind;
        }

        if (card1 === card2) {
          counter = 0;
          guessedCards.push(card1Num);
          guessedCards.push(card2Num);
          card1 = '';
          card2 = '';
        }
      });
    });
  });
});
