import CardProps from '../../assets/CardProps'
import axios from 'axios'
import { useQuery, useMutation, } from '@tanstack/react-query'
import Card from '../../components/Card/Card'
import { useNavigate } from 'react-router-dom'


const Characters =() => {

  const navigate = useNavigate();
  const postQuery =  useQuery({
    queryKey: ['cards'],
    queryFn: async () => {
      const response = await axios.get<{results: CardProps[]}>('https://rickandmortyapi.com/api/character');
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
          <div key={card.id} className="col-4">
            <Card onLoadMore={handleClick}  key={card.id} {...card}/>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Characters
