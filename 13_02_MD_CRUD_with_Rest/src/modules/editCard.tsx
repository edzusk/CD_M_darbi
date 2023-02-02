import { useRef, useState } from "react";
import host from "./host";
import axios from "axios";
import React from "react";
import Car from "./types";

const  EditCarForm = ({selectedCarId, car}:{selectedCarId:number, car:Car}) => {
    const [make, setMake] = useState(car.make);
    const [model, setModel] = useState(car.model);
    const [pictureLink, setPictureLink ] = useState(car.pictureLink);
    const [year, setYear] = useState(car.year);
    const [description, setDescription] = useState(car.description);
    const makeRef = useRef<HTMLInputElement>(null);
    const modelRef = useRef<HTMLInputElement>(null);
    const pictureLinkRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLInputElement>(null);
    const yearRef = useRef<HTMLInputElement>(null);
    
    const handleSubmitEdit = () =>{
        axios.put(`${host}/${selectedCarId}`, {
          make: makeRef.current?.value,
          model: modelRef.current?.value,
          year: yearRef.current?.value,
          description: descRef.current?.value,
          pictureLink: pictureLinkRef.current?.value,
        })
    }

    return (
    <div className="container">
        <form className="newCar" onSubmit={() => handleSubmitEdit()} action="">
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input model" type="text" ref = {makeRef} value={make} 
                    onChange={e => setMake(e.target.value)} placeholder="Text input"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Model</label>
                <div className="control">
                    <input className="input model" type="text" ref = {modelRef} value={model} 
                    onChange={e => setModel(e.target.value)} placeholder="Text input"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Picture</label>
                <div className="control">
                    <input className="input pictureLink" type="text" ref = {pictureLinkRef} 
                    value={pictureLink} onChange={e => setPictureLink(e.target.value)} placeholder="Link"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Year</label>
                <div className="control">
                    <div className="select">
                        <select className="year" ref = {yearRef} value={year} 
                        onChange={e => setYear(Number(e.target.value))}>
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
            <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <textarea className="textarea description" ref = {descRef} value={description}
                    onChange={e => setDescription(e.target.value)}  placeholder="Description"></textarea>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button type="submit" className="button is-link">Confirm changes</button>
                </div>
            </div>
        </form>
    </div>
    )
};

export default EditCarForm;