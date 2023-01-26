import axios from 'axios';
import {
  Country, countryTable, host, location, pageBtns,
} from './modules/constants';

let searchLink = host;
let sortedLink = searchLink;
let currentPage = 1;
let maxPage = 1;

const makeTableItem = (country:Country) => (
  `<tr class="country-table__item">
        <td>${country.name}</td>
        <td>${country.capital}</td>
        <td>${country.currency.name}</td>
        <td>${country.language.name}</td>
      </tr>`
);

const drawTable = (link: string) => {
  countryTable.innerHTML = '';
  axios.get<Country[]>(link).then((countries) => {
    countries.data.forEach((country) => {
      countryTable.innerHTML += makeTableItem(country);
    });
  });
};

const updateMaxPage = async (link:string) => {
  const newArr = await axios.get<Country[]>(link);
  maxPage = Math.ceil(newArr.data.length / 20);
  location.innerHTML = `${currentPage}/${maxPage}`;
};

const loadPage = (link:string) => {
  updateMaxPage(link);
  countryTable.innerHTML = '';
  drawTable(`${link}&_page=${currentPage}&_limit=20`);
  location.innerHTML = `${currentPage}/${maxPage}`;
};

const pageChanger = () => {
  pageBtns.forEach((btn) => {
    btn.addEventListener('click', (ev) => {
      const cahngePageEv = (<HTMLInputElement>ev.target).value;
      if (cahngePageEv === 'next') {
        currentPage = currentPage === maxPage ? 1 : currentPage + 1;
      }
      if (cahngePageEv === 'previous') {
        currentPage = currentPage === 1 ? maxPage : currentPage - 1;
      }
      const linkToShow = `${searchLink}&_page=${currentPage}&_limit=20`;
      drawTable(linkToShow);
      location.innerHTML = `${currentPage}/${maxPage}`;
    });
  });
};

const sortedBy = () => {
  countryTable.innerHTML = '';
  let [nameDir, capDir, curDir, lanDir] = ['desc', 'desc', 'desc', 'desc'];
  const sorters = document.querySelector('.sorters');
  const sortBybyName = sorters.querySelector('#byName');
  const sortByCapital = sorters.querySelector('#byCapital');
  const sortByLanguage = sorters.querySelector('#byLanguage');
  const sortbyCurrency = sorters.querySelector('#byCurrency');
  sortBybyName.addEventListener('click', () => {
    if (nameDir === 'desc') {
      [nameDir, capDir, curDir, lanDir] = ['asc', 'desc', 'desc', 'desc'];
    } else {
      [nameDir, capDir, curDir, lanDir] = ['desc', 'desc', 'desc', 'desc'];
    }
    const sortBy = (<HTMLInputElement>sortBybyName).value;
    sortedLink = `${searchLink}&_sort=${sortBy}&_order=${nameDir}`;
    updateMaxPage(sortedLink);
    currentPage = 1;
    loadPage(sortedLink);
  });
  sortByCapital.addEventListener('click', () => {
    if (capDir === 'desc') {
      [nameDir, capDir, curDir, lanDir] = ['desc', 'asc', 'desc', 'desc'];
    } else {
      [nameDir, capDir, curDir, lanDir] = ['desc', 'desc', 'desc', 'desc'];
    }
    const sortBy = (<HTMLInputElement>sortByCapital).value;
    sortedLink = `${searchLink}&_sort=${sortBy}&_order=${capDir}`;
    updateMaxPage(sortedLink);
    currentPage = 1;
    loadPage(sortedLink);
  });
  sortByLanguage.addEventListener('click', () => {
    if (lanDir === 'desc') {
      [nameDir, capDir, curDir, lanDir] = ['desc', 'desc', 'desc', 'asc'];
    } else {
      [nameDir, capDir, curDir, lanDir] = ['desc', 'desc', 'desc', 'desc'];
    }
    const sortBy = (<HTMLInputElement>sortByLanguage).value;
    sortedLink = `${searchLink}&_sort=${sortBy}&_order=${lanDir}`;
    updateMaxPage(sortedLink);
    currentPage = 1;
    loadPage(sortedLink);
  });
  sortbyCurrency.addEventListener('click', () => {
    if (curDir === 'desc') {
      [nameDir, capDir, curDir, lanDir] = ['desc', 'desc', 'asc', 'desc'];
    } else {
      [nameDir, capDir, curDir, lanDir] = ['desc', 'desc', 'desc', 'desc'];
    }
    const sortBy = (<HTMLInputElement>sortbyCurrency).value;
    sortedLink = `${searchLink}&_sort=${sortBy}&_order=${curDir}`;
    updateMaxPage(sortedLink);
    currentPage = 1;
    loadPage(sortedLink);
  });
};

const search = (link:string) => {
  const searchForm = document.querySelector('.search-form');
  const searchBtn = searchForm.querySelector('.button');
  const searchAtributes = searchForm.querySelectorAll<HTMLInputElement>('.search-form__item');
  searchBtn.addEventListener('click', () => {
    let searchResult = `${link}`;
    searchAtributes.forEach((input) => {
      if (input.value) {
        searchResult += `&${input.id}=${input.value}`;
      }
    });
    searchLink = searchResult;
    updateMaxPage(searchResult);
    currentPage = 1;
    loadPage(searchResult);
  });
};

loadPage(host);
search(host);
pageChanger();
sortedBy();

// if it works it's not stupid
