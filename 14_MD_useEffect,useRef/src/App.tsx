import React from 'react'
import { useState } from 'react'
import './App.css'
import SingeInputForm from './components/SingleInputForm'
import Multiplier from './components/Multiplier'
import Boxgenerator from './components/BoxGenerator'
import TextInputWithCounter from './components/TextInputWithCounter'
import TextInputWithMagnifier from './components/TextInputWithMagnifier'
import GoldenDiv from './components/GoldenDiv'
import CloneDiv from './components/CloneDiv'

const App = () => {

  return (
    <>
    <div className="container d-flex justify-content-center">
      <h1>14 MD_ useEffect, useRef</h1>
    </div>
    <section className='part1'>
      <div className='container bottom-border'>
        <h2>Part-1</h2>
        <div className='row'>
        <SingeInputForm/>
        </div>
      </div>
      <div className="container bottom-border">
        <Multiplier step={1} multiplier={2}/>
      </div>
      <div className="container bottom-border">
        <Boxgenerator/>
      </div>
    </section>
    <section className='part2'>
      <div className="container bottom-border">
        <h2>Part-2</h2>
        <TextInputWithCounter/>
      </div>
      <div className="container bottom-border">
        <TextInputWithMagnifier/>
      </div>
    </section>
    <section className='part1'>
      <div className="container">
        <h2>part-3</h2>
        {/* <GoldenDiv/> */}
      </div>
      <div className="container">
        <h2>part-3</h2>
        <CloneDiv/>
      </div>
    </section>
    </>
  )
}

export default App
