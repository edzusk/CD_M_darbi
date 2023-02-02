import React from 'react';
import './App.css'
import AddNewCarForm from './modules/addNewCarForm';
import GenerateCards from './modules/generateCards';

function App() {
  return (
    <><header className="header">
      <div className="container align-content-center">
        <h1 className="headding title is-1">
          90's Cars
        </h1>
      </div>
    </header><section className="section">
        <GenerateCards />
        <AddNewCarForm />
      </section>
      <footer className="footer">
      <div className="container">
        <h4 className="headding title is-5">Created with react + typescript</h4>
      </div>
    </footer>
      </>
  )
}

export default App