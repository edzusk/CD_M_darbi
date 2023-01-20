const pagenumber = document.querySelector('.pagenumber');
const pageContent = document.querySelector('.pageContent');
const nextPrevious = document.querySelectorAll('.btn');

const addCardContent = (card:HTMLDivElement) => {
  const thumbnail = <HTMLImageElement>document.createElement('img');
  thumbnail.classList.add('thumbnail');
  thumbnail.src = '';
  const name = <HTMLElement>document.createElement('h2');
  name.classList.add('hedding', 'name');
  const race = <HTMLElement>document.createElement('span');
  race.classList.add('text', 'race');
  const originComment = <HTMLElement>document.createElement('span');
  originComment.classList.add('comment');
  originComment.innerHTML = 'Origins:';
  const origin = <HTMLElement>document.createElement('span');
  origin.classList.add('text', 'origin');
  const lastSeenComment = <HTMLElement>document.createElement('span');
  lastSeenComment.classList.add('comment');
  lastSeenComment.innerHTML = 'Last known location:';
  const lastSeen = <HTMLElement>document.createElement('span');
  lastSeen.classList.add('text', 'lastSeen');
  const episodeComment = <HTMLElement>document.createElement('span');
  episodeComment.classList.add('comment');
  episodeComment.innerHTML = 'First seen in episode:';
  const firstEpisode = <HTMLElement>document.createElement('span');
  firstEpisode.classList.add('text', 'firstEpisode');
  card.appendChild(thumbnail);
  card.appendChild(name);
  card.appendChild(race);
  card.appendChild(originComment);
  card.appendChild(origin);
  card.appendChild(lastSeenComment);
  card.appendChild(lastSeen);
  card.appendChild(episodeComment);
  card.appendChild(firstEpisode);
};

const addCard = () => {
  const cardwrapper = <HTMLDivElement>document.createElement('div.');
  cardwrapper.classList.add('col-sm-12', 'col-md-6', 'col-xl-3', 'wrapper');
  const card = <HTMLDivElement>document.createElement('div.');
  card.classList.add('card');
  cardwrapper.appendChild(card);
  pageContent.appendChild(cardwrapper);
  addCardContent(card);
};

export {
  pagenumber,
  pageContent,
  nextPrevious,
  addCard,
};
