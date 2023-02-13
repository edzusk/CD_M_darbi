import style from './Blog.module.scss'
import Post from "../../Components/Types";

import { Comments } from "../../Components/Types";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import AddComent from "../../Components/AddComent/AddComent";
import Button from '../../Components/inputs_buttons/button';
import host from '../../Components/host';

type NewComment = {author:string, content:string, avatar:string, blogId:number }

const getPost = async (id: string) => {
  const { data } = await axios.get(`${host}/posts/${id}`);
  return data;
};

const Blog = () => {
  const queryClient = useQueryClient()
  const { id } = useParams();
  
  // console.log(id);

  const { data : dataPost, isError: isErrorPost, isLoading: isLoadingPost, } = useQuery<Post>(["post", id], () =>
    getPost(id!)
  );
  console.log(dataPost);

  const { data : dataComments, isError: isErrorComments, isLoading: isLoadingComments, } = useQuery<Comments[]>(['comments', id], () =>
    getPost(`${id!}/comments`)
  );
  
  const handleSubmit = (author:string, content:string, avatar:string) => {
    const blogId = Number(id)
    const newComment: NewComment | any = {author, content, avatar, blogId }
    mutationAdd.mutate(newComment);
};

const mutationAdd = useMutation({
    mutationFn: (newComment) => {
        return axios.post<Comments>(`${host}/posts/newcoment/${id}`, newComment)
    },
    onSuccess: () => {
      toast("Commment added!");
      queryClient.invalidateQueries(['comments'])
    },
});

 const handelDelclick = (comentID: number | undefined | any) => {
  mutateDelete.mutate(comentID)
 }

 const mutateDelete = useMutation({
  mutationFn: (comentID) => {
    return axios.delete<Comments[]>(`${host}/comments/${comentID}`)
  },
  onSuccess: () => {
    queryClient.invalidateQueries(['comments'])
      toast("Commment deleted!");
  }
 })


if (mutationAdd.isLoading) return <h1>Adding comment...</h1>;

if (mutationAdd.isError) return <h1>An error has occurred.</h1>;

  if (isLoadingComments || isLoadingPost){
    return <h1> LOADING......</h1>
  }

  if (!dataComments || !dataComments) {
    return <h1>No data</h1>
  }

  return (
    <div className="container">
      <div className={style.blogWrapper}>
        {/* <img className={style.blogImage} src={dataPost?.image} alt={`${dataPost?.title} image`} /> */}
        <div className={style.blogContent}>
        <Link to={`http://localhost:5173/editBlog/${id}`} className={style.editLink}>edit</Link>
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
            <button className={style.comentDeleteBtn} onClick={() => handelDelclick(id)}>X</button>
        </div>
      ))}
    {
      <AddComent onSubmit={handleSubmit}/>
    }
    <ToastContainer autoClose={5000} theme="dark" position="top-center" hideProgressBar={false}/>
    </div>
  );
};

export default Blog;
