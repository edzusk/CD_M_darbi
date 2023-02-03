import { useRef } from "react";
import host from "./host";
import axios from "axios";
import React from "react";

const  AddNewCarForm = () => {
    const makeRef = useRef<HTMLInputElement>(null);
    const modelRef = useRef<HTMLInputElement>(null);
    const pictureLinkRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLInputElement>(null);
    const yearRef = useRef<HTMLInputElement>(null);
    
    const handleSubmitNew = () =>{
        axios.post(host, {
          make: makeRef.current?.value,
          model: modelRef.current?.value,
          year: yearRef.current?.value,
          description: descRef.current?.value,
          pictureLink: pictureLinkRef.current?.value,
        })
    }
    return (
    <div className="container">
        <div className="seperate"></div>
        <h2 className="headding title is-3">
            Add new car
        </h2>
        <form className="newCar" 
        onSubmit={(e) => {
            handleSubmitNew();
            // e.preventDefault()
        }} 
        action="">
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input model" type="text" ref = {makeRef} placeholder="Text input"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Model</label>
                <div className="control">
                    <input className="input model" type="text" ref = {modelRef} placeholder="Text input"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Picture</label>
                <div className="control">
                    <input className="input pictureLink" type="text" ref = {pictureLinkRef} placeholder="Link"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Year</label>
                <div className="control">
                    <div className="select">
                        <select className="year" ref = {yearRef}>
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
                    <textarea className="textarea description" ref = {descRef}  placeholder="Description"></textarea>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button type="submit" className="button is-link">Add to collection</button>
                </div>
            </div>
        </form>
    </div>
    )
};


export default AddNewCarForm;