import './assets/reset.css'
import './assets/bootstrap-grid.css'
import './App.css'
import Characters from './Pages/Characters/Characters'
import Character from './Pages/Character/Charater'
import Home from './Pages/Home/Home'
import Header from './components/Header/Header'
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";


const getActiveLinkClassName = (isActive : boolean) => (isActive ? 'link link--active' : 'link');


const App =() => {

  return(
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/characters' element={<Characters />} />
        <Route path='/character/:id' element={<Character/>} />
      </Routes>
    </BrowserRouter></>
  )
}

export default App
