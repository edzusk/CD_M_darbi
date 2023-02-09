import style from './AddBlog.module.scss'
import { useState } from 'react'
import TextInput from '../../Components/inputs_buttons/TextInput'
import Button from '../../Components/inputs_buttons/button'
import TextInputArea from '../../Components/inputs_buttons/TextInputArea'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddBlog = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [image, setimage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    const newPost : any = {title, image, content};

    mutation.mutate(newPost);
    setTitle("");
    setimage("");
    setContent("");
    // navigate('/blog')

};
const mutation = useMutation({
    mutationFn: (newPost) => {
        return axios.post('http://localhost:3004/blog', newPost);
    },
    onSuccess: ({data}) => {
      navigate(`/blog/${data.id}`)
    },
});

if (mutation.isLoading) return <h1>Adding...</h1>;

// if (error) return 'An error has occurred: ' + error.message;
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
        <Button type={"submit"} children={"Add post"} />
      </form>
    </div>
  );
};

export default AddBlog;