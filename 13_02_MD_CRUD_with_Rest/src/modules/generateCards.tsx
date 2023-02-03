import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react'

import Car from './types';
import host from './host';
import EditCarForm from './editCard';

function GenerateCards() {
  const [Carlist, setCarlist] = useState<Car[]>([]);
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null);
  
  const getCarlist =  () => {
    axios.get(host).then(({data}) => {
      setCarlist(data)
      console.log('doing something');
    })
  };

  useEffect(() => getCarlist(), []);
  
  const handleDelete = (id:number) => {
    axios.delete(`${host}/${id}`);
    getCarlist();
  }

  const [showNewDiv, setShowNewDiv] = useState(false);

  const handleEdit = (id: number) => {
    setSelectedCarId(id);
    setShowNewDiv(!showNewDiv);
  };

  return (
      <div className="container">
        <div className="columns is-variable is-2 is-multiline  parking">
          {
          Carlist && Carlist.length > 0 ?
          Carlist.map(car => (
            <div key={car.id} className="column is-one-third">
              <div className="card has-background-link-light grow is-flex is-flex-direction-column is-justify-content-space-between" >
                <div className="card-image">
                  <figure className="image is-5by3">
                    <img className="cover" src={car.pictureLink} alt="Placeholder image"/>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{car.make}</p>
                      <p className="subtitle is-6">{car.model}</p>
                    </div>
                  </div>
                  <div className="content">
                    {car.description}
                    <br/>
                    {car.year}
                  </div>
                <div className="field is-grouped">
                  <div className="control">
                      <button className="button is-link" onClick={() => handleEdit(car.id)}>Edit</button>
                  </div>
                  <div className="control">
                      <button className="button is-link" onClick={() => handleDelete(car.id)}>Delete</button>
                  </div>
                </div>
              {showNewDiv && selectedCarId === car.id &&(
                <div>
                  <EditCarForm selectedCarId = {selectedCarId} car = {car}/>
                </div>
              )}
                </div>
              </div>
            </div>
          )):
          ''
        }
        </div>
      </div>
  )
}

export default GenerateCards