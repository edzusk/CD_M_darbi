import style from './Hero.module.scss'
import { useGetAllAnimalsQuery, useDeleteAnimalMutation, Animal, useGetAnimalsByHabitatMutation } from '../../store/APIanimalSlice'



const Hero = () => {
  const {data: animals, isLoading, isError} = useGetAllAnimalsQuery();

const [deleteAnimal, {isLoading: isLoadingDel, isError: isErrorDel}] = useDeleteAnimalMutation();


  const handleDelete = (id:number) => {
    deleteAnimal(id);
  }
  
  if(isLoading || isLoadingDel) {
    return <h1>Loading...</h1>
  }
  if(isError || isErrorDel) {
    return <h1>Soemthing went wrong</h1>
  }

  if (!animals) {
    return <h1>No data</h1>
  }

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
          onClick={()=> handleDelete(animal.id)}
          >Remove animal</button>
        </div>
      ))}

      </div>
    </div>
  )
}

export default Hero