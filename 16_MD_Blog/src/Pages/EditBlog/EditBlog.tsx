import style from '../AddBlog/AddBlog.module.scss'

import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Post from '../../Components/Types';

import TextInput from "../../Components/inputs_buttons/TextInput";
import TextInputArea from '../../Components/inputs_buttons/TextInputArea';
import Button from '../../Components/inputs_buttons/button';
import axios from 'axios';

const getPostData = async (id:string) => {
  const { data } = await axios.get<Post>(`http://localhost:3004/blog/${id}`);
  return data;
};

const EditBlog = () => {
  const queryClient = useQueryClient()
  const { id } = useParams();

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setimage] = useState('')

  useEffect(() => {
    getPostData(id!).then(({title, content, image}) => {
      setTitle(title);
      setContent(content);
      setimage(image);
    })
  }, [])



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const newPostData: any = {title, content, image}
    e.preventDefault();
    editMutation.mutate(newPostData)

  }

  const editMutation = useMutation({
    mutationFn: (newPostData) => {
        return axios.put(`http://localhost:3004/blog/${id}`, newPostData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['post'])
        toast("Changes saved!!");
    },
});

if (editMutation.isLoading) return <h1>Adding...</h1>;

if (editMutation.isError) return <h1>An error has occurred.</h1>;


  return (
    <div className="container">
      <form
        className={style.Formwrapper}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        action=""
      >
        <div className={style.imageprevievwrap}>
          <div className={style.Formwrapper}>
            <label className={style.formLabel} htmlFor="">
              <TextInput
                onChange={setTitle}
                value={title}
                required={true}
                placeholder={"Blog title"}
              />
              Post title
            </label>
            <label className={style.formLabel} htmlFor="">
              <TextInput
                onChange={setimage}
                value={image}
                required={true}
                placeholder={"https://...."}
              />
              Image Link
            </label>
          </div>
          <img className={style.prwviewImage} src={image} alt="" />
        </div>
        <TextInputArea
          onChange={setContent}
          value={content}
          required={true}
          placeholder={"Blooog"}
        />
        <Button type={"submit"} children={"Save changes"} />
      </form>
        <ToastContainer autoClose={10000} hideProgressBar={false} theme="dark" position="top-center"/>
    </div>
  );
}

export default EditBlog