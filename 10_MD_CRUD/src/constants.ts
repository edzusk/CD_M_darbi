const parking = document.querySelector('.parking');

type Car = {
  id:number;
  make : string;
  model : string;
  year : number;
  description : string;
  pictureLink : string;
};

const editForm = (car: Car) => (
  `<form class="editform hidden" action="">
  <div class="field">
    <label class="label">Make</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-success make" type="text" placeholder="Text input" value="${car.make}">
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
  </div>
  <div class="field">
    <label class="label">Model</label>
    <div class="control">
      <input class="input model" value="${car.model}" type="text" placeholder="Text input">
    </div>
  </div>
  <div class="field">
    <label class="label">Picture</label>
    <div class="control">
      <input class="input pictureLink" type="text" placeholder="Link" value="${car.pictureLink}">
    </div>
  </div>
  <div class="field">
    <label class="label">Year</label>
    <div class="control">
      <div class="select">
        <select value="${car.year}" class="year">
          <option>1990</option>
          <option>1991</option>
          <option>1992</option>
          <option>1993</option>
          <option>1994</option>
          <option>1995</option>
          <option>1996</option>
          <option>1997</option>
          <option>1998</option>
          <option>1999</option>
        </select>
      </div>
    </div>
  </div>
  <div class="field">
    <label class="label">Description</label>
    <div class="control">
      <textarea class="textarea description" value="${car.description}" placeholder="Textarea">${car.description}</textarea>
    </div>
  </div>
  <div class="field is-grouped">
    <div class="control">
      <button type="submit" class="button is-link js-update">Update</button>
    </div>
  </div>
</form>`
);

const cardContent = (car:Car) => (
  `<div class="column is-one-third">
    <div class="card has-background-link-light grow is-flex is-flex-direction-column is-justify-content-space-between" >
        <div class="card-image">
            <figure class="image is-5by3">
            <img class="cover" src="${car.pictureLink}" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-content">
              <p class="title is-4">${car.make}</p>
              <p class="subtitle is-6">${car.model}</p>
            </div>
            </div>
            <div class="content">
                ${car.description}
            <br>
                ${car.year}
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button value="${car.id}" class="button is-link js-edit">Edit</button>
                </div>
                <div class="control">
                    <button value="${car.id}" class="button is-link is-light js-remove">Delete</button>
                </div>
            </div>
            <div class="car${car.id}">
              ${editForm(car)}
            </div>
        </div>
    </div>
    </div>`
);

export {
  parking,
  cardContent,
  Car,
};
