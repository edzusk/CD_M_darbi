import style from './Blog.module.scss'
import Post from "../../Components/Types";
import { Comments } from "../../Components/Types";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { useParams } from "react-router-dom";
import AddComent from "../../Components/AddComent/AddComent";

const getPost = async (id: string) => {
  const { data } = await axios.get(`http://localhost:3004/blog/${id}`);
  return data;
};

const Blog = () => {
  const { id } = useParams();
  
  console.log(id);

  const { data : dataPost, isError: isErrorPost, isLoading: isLoadingPost, } = useQuery<Post>(["post", id], () =>
    getPost(id!)
  );
  console.log(dataPost);

  const { data : dataComments, isError: isErrorComments, isLoading: isLoadingComments, refetch: refetchComments } = useQuery<Comments[]>(['comments'], () =>
    getPost(`${id!}/comments`)
  );
  console.log(dataComments);
  
  
  const handleSubmit = async (author:string, content:string, avatar:string) => {
    const blogId = Number(id)
    const newComment = {author, content, avatar, blogId }
    await  axios.post<Comments>(`http://localhost:3004/blog/${id}/comments`, newComment)
    console.log({author, content, avatar})
    refetchComments()
  }

  if (isLoadingComments || isLoadingPost){
    return <h1> LOADING......</h1>
  }

  if (!dataComments || !dataComments) {
    return <h1>No data</h1>
  }

  return (
    <div className="container">
      <div className={style.blogWrapper}>
        <img className={style.blogImage} src={dataPost?.image} alt="" />
        <div className={style.blogContent}>
          <h2 className={style.blogHeadding}>{dataPost?.title}</h2>
          <p>{dataPost?.content}</p>

        </div>
      </div>
      {dataComments.map(({id, author, avatar, content}) => (
        <div key={id} className={style.commentWrapper}>
          <img className={style.comentAvatar} src={avatar} alt="" />
          <div className={style.commentConntent}>
            <h3 className={style.commentAuthor}>{author}</h3>
            <p>{content}</p>
          </div>
        </div>
      ))}
    {
      <AddComent onSubmit={handleSubmit}/>
    }
    </div>
  );
};

export default Blog;
