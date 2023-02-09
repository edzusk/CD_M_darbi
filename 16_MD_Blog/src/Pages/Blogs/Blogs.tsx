import style from './Blogs.module.scss'
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import BlogCard from "../../Components/BlogCard/BlogCard";
import Post from "../../Components/Types";


const getAllPosts = async () => {
  const {data} = await axios.get('http://localhost:3004/blog')
  return data
}

const Blogs = () => {
  const {data, isError, isLoading, error} = useQuery<Post[]>(['data'], getAllPosts);

  if (isLoading) {
    return <h1>Loading....</h1>
  }
  if (isError) {
    return <pre>{JSON.stringify(error)}</pre>
  }
  if (!data) {
    return <h1>Something went wrong</h1>
  }
  console.log(data)
  return (
  <>
  <div className="container">
    <div className={style.cardWrapper}>
      {data.map( (post)=>(
        <BlogCard key={post.id} {...post}  />
      ))}
    </div>
  </div>
  </>
  )
};

export default Blogs;
