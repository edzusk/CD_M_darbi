import style from './AddBlog.module.scss'
import { useState } from 'react'
import TextInput from '../../Components/inputs_buttons/TextInput'
import Button from '../../Components/inputs_buttons/button'
import TextInputArea from '../../Components/inputs_buttons/TextInputArea'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import host from '../../Components/host'

type NewPostbody = {
  title: string,
  content: string,
  image: File
}

const AddBlog = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<any>(null);
  const [imageLink, setImageLink] = useState<any>(null);
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    const newPost : any = {title, image, content};
    // const newPost : any = {title, content};
    mutation.mutate(newPost);
    setTitle("");
    // setimage("");
    setContent("");
};

const mutation = useMutation({
   
    mutationFn: (newPost:NewPostbody) => {
      const formData = new FormData();
      formData.append('title', newPost.title);
      formData.append('content', newPost.content);
      const file = new File([newPost.image], newPost.image.name)
      formData.append('image', file);
      return axios.post(`${host}/new/`,  formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    },

    onSuccess: ({data}) => {
      console.log(data)
      toast("Post added!");
      // setTimeout(() => navigate(`/blog/${data.id}`), 3000)
      // navigate(`/blog/${data.id}`)
    },
});


if (mutation.isLoading) return <h1>Adding...</h1>;

if (mutation.isError) return <h1>An error has occurred.</h1>;

  return (
    <div className="container">
      <form
        className={style.Formwrapper}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
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
                placeholder={"Post title"}
              />
              Post title
            </label>
            <label className={style.fileUpload}  htmlFor="actual-upload">
            <input className={style.hidden} hidden 
            onChange={(e) => {
              if (e.target.files instanceof FileList) {
                setImage(e.target.files[0]);
                setImageLink(URL.createObjectURL(e.target.files[0]));
              }
            }}
            type="file" name="" 
            id="actual-upload" />
            Choose post image
            </label>
          </div>
          <img className={style.prwviewImage} src={imageLink} alt="" />
        </div>
        <TextInputArea
          onChange={setContent}
          value={content}
          required={true}
          placeholder={"What's on Your mind...."}
        />
        <Button type={"submit"} children={"Add post"} />
        <ToastContainer autoClose={5000} theme="dark" position="top-center" hideProgressBar={false}/>
      </form>
    </div>
  );
};

export default AddBlog;