import CardProps from '../../assets/CardProps'
import axios from 'axios'
import { useQuery, useMutation, } from '@tanstack/react-query'
import Card from '../../components/Card/Card'
import { useNavigate } from 'react-router-dom'
import ThumbnailCard from '../../components/ThumbnailCard/ThumbnailCard'


const Characters =() => {

  const navigate = useNavigate();
  const postQuery =  useQuery <CardProps[]>({
    queryKey: ['cards'],
    queryFn: async () => {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      return response.data.results;
    }
  })


  if (postQuery.isLoading) {
    return <h1>Loading...</h1>
  }
  if (postQuery.isError) {
    return <pre>{JSON.stringify(postQuery.error)}</pre>
  }
  
  const handleClick = (id:number) =>{
    console.log(`card clicked ${id}`)
    navigate(`/character/${id}`);
  }

  return(
    <>
    <div className="container">
      <div className="row">
        
        {postQuery.data.map(card => (
          <div key={card.id} className="col-3">
            <ThumbnailCard onLoadMore={handleClick}  key={card.id} {...card}/>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Characters
