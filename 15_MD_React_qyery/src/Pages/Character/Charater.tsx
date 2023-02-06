import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom"
import CardProps from "../../assets/CardProps";
import Card from "../../components/Card/Card";


const Character = () => {
    const { id } = useParams();

    const postQuery =  useQuery<CardProps>({
        queryKey: ['Card'],
        queryFn: async () => {
          const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
          console.log(id)
          console.log(response.data)
          return response.data;
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
            <div>{JSON.stringify(postQuery.data.id)}</div>
            <Card {...postQuery.data}/>
        </div>
    )

}

export default Character