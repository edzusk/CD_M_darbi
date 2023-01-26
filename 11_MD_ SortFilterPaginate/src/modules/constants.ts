const countryTable = document.querySelector('.country-table');
const host = 'http://localhost:3004/countries?';
const paginator = document.querySelector('.paginator');
const location = paginator.querySelector('.paginator__location');
const pageBtns = paginator.querySelectorAll<HTMLInputElement>('.button');
type Country = {
    'name': string,
    'code': string,
    'capital': string,
    'region': string,
    'currency': {
      'code': string,
      'name': string,
      'symbol': string
    },
    'language': {
      'code': string,
      'name': string
    },
    'flag': string,
    'dialling_code': string,
    'isoCode': string
};

export {
  countryTable,
  host,
  paginator,
  location,
  pageBtns,
  Country,
};
