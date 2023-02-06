import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom"
import CardProps from "../../assets/CardProps";
import Card from "../../components/Card/Card";
type CharacterProps = {
    
}

const Character = () => {
    const { id } = useParams();

    const postQuery =  useQuery({
        queryKey: ['Card'],
        queryFn: async () => {
          const response = await axios.get<{results: CardProps[]}>(`https://rickandmortyapi.com/api/character/${id}`);
          console.log(id)
          return response.data.results;
        }
      })
    
    
      if (postQuery.isLoading) {
        return <h1>Loading...</h1>
      }
      if (postQuery.isError) {
        return <pre>{JSON.stringify(postQuery.error)}</pre>
      }
    return (
        <div className="container">
            {postQuery.data.map(card => (
          <div key={card.id} className="col-4">
            <Card key={card.id} {...card}/>
          </div>
        ))}
        </div>
    )

}

export default Character