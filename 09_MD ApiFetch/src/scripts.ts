import {
  addCard, nextPrevious, pageContent, pagenumber,
} from './constants';

let page = 1;

let tumbnails = document.querySelectorAll<HTMLImageElement>('.thumbnail');
let names = document.querySelectorAll('.name');
let races = document.querySelectorAll('.race');
let origins = document.querySelectorAll('.origin');
let lastSeens = document.querySelectorAll('.lastSeen');
let firstEpisodes = document.querySelectorAll('.firstEpisode');

type CharData = {
    image:string,
    name:string,
    species:string,
    status:string,
    origin:{[key:string]:string},
    location:{[key:string]:string},
    episode: string[];
}

const showdata = (charData: CharData, i:number) => {
  tumbnails[i].src = charData.image;
  names[i].innerHTML = charData.name;
  races[i].innerHTML += charData.species;
  races[i].innerHTML += ` - ${charData.status}`;
  if (charData.status === 'Alive') {
    races[i].innerHTML += ' <span class="green">⭓</span>';
  }
  if (charData.status === 'Dead') {
    races[i].innerHTML += ' <span class="red">⭓</span>';
  }
  if (charData.status === 'unknown') {
    races[i].innerHTML += ' <span class="yellow">⭓</span>';
  }
  origins[i].innerHTML = charData.origin.name;
  lastSeens[i].innerHTML = charData.location.name;
  fetch(charData.episode[0])
    .then((response) => response.json())
    .then((data) => {
      firstEpisodes[i].innerHTML = (JSON.stringify(data.name));
    });
};

const loadPage = () => {
  pagenumber.innerHTML = `Page : ${page}/42`;
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results.length);
      for (let i = 0; i < data.results.length; i += 1) {
        addCard();
        tumbnails = document.querySelectorAll<HTMLImageElement>('.thumbnail');
        names = document.querySelectorAll('.name');
        races = document.querySelectorAll('.race');
        origins = document.querySelectorAll('.origin');
        lastSeens = document.querySelectorAll('.lastSeen');
        firstEpisodes = document.querySelectorAll('.firstEpisode');
        showdata(data.results[i], i);
      }
    });
};
loadPage();
const onNext = () => {
  nextPrevious[0].addEventListener('click', () => {
    pageContent.innerHTML = '';
    if (page === 1) {
      page = 42;
    } else {
      page -= 1;
    }
    loadPage();
  });
};

const onPrevious = () => {
  nextPrevious[1].addEventListener('click', () => {
    pageContent.innerHTML = '';
    if (page === 42) {
      page = 1;
    } else {
      page += 1;
    }
    loadPage();
  });
};

onNext();
onPrevious();
