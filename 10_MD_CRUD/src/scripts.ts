import axios from 'axios';
import {Car, cardContent, parking} from './constants'

const addCar = () => document.querySelector('.js-add').addEventListener('click', () => {
  const newCarfield = document.querySelector('.newCar');
  axios.post<Car>('http://localhost:3004/cars', {
    make: newCarfield.querySelector<HTMLInputElement>('.make').value,
    model: newCarfield.querySelector<HTMLInputElement>('.model').value,
    year: newCarfield.querySelector<HTMLInputElement>('.year').value,
    description: newCarfield.querySelector<HTMLInputElement>('.description').value,
    pictureLink: newCarfield.querySelector<HTMLInputElement>('.pictureLink').value,
  });
});

const deleteCar = () => {
  const delbuttns = document.querySelectorAll<HTMLInputElement>('.js-remove');
  delbuttns.forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log(btn.value);
      axios.delete(`http://localhost:3004/cars/${btn.value}`);
      window.location.reload();
    });
  });
};

const editCar = () => {
  const editButton = document.querySelectorAll<HTMLInputElement>('.js-edit');
  editButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log(btn.value);
      const carToUpdate = document.querySelector(`.car${btn.value}`);
      carToUpdate.querySelector('.editform').classList.remove('hidden');

      carToUpdate.querySelector('.js-update').addEventListener('click', () => {
        axios.put(`http://localhost:3004/cars/${btn.value}`, {
          make: carToUpdate.querySelector<HTMLInputElement>('.make').value,
          model: carToUpdate.querySelector<HTMLInputElement>('.model').value,
          year: carToUpdate.querySelector<HTMLInputElement>('.year').value,
          description: carToUpdate.querySelector<HTMLInputElement>('.description').value,
          pictureLink: carToUpdate.querySelector<HTMLInputElement>('.pictureLink').value,
        });
      });
    });
  });
};

const showCards = () => {
  axios.get<Car[]>('http://localhost:3004/cars').then((cars) => {
    cars.data.forEach((car) => {
      parking.innerHTML += cardContent(car);
    });
  })
    .then(() => deleteCar())
    .then(() => editCar());
};

addCar();

showCards();
