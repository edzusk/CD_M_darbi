import { useDispatch, useSelector } from 'react-redux'
import { removeAnimal } from '../../store/animalslice'
import { RootState } from '../../store/store'
import style from './Hero.module.scss'


const Hero = () => {
  const animals = useSelector((state: RootState) => state.animals.animals)
  const dispatch = useDispatch()

  return (
    <div className="comtainer">
      <h1>Animals</h1>
      <div className="row">

      {animals.map(animal => (
        <div key={Math.random()} className={`${style.animalCard} col-3`}>
          <span>{animal.name}</span>
          <img src={animal.imageUrl} alt="" />
          <span>habitat: {animal.habitat}</span>
          <button
          onClick={()=> dispatch(removeAnimal(animal.name))}
          >Remove animal</button>
        </div>
      ))}

      </div>
    </div>
  )
}

export default Hero