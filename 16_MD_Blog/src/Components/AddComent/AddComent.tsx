import style from './AddComent.module.scss'
import { useState } from "react";
import Button from '../inputs_buttons/button';


type AddComentProps = {
  onSubmit: (author: string, content: string, avatar: string) => void
}

const AddComent = ({onSubmit}:AddComentProps) => {
  const [author, setAuthor] = useState<string>("");
  const [avatar, setImageLink] = useState<string>("");
  const [content, setComment] = useState<string>("");

  const handleSubmit = () => {
    onSubmit ? onSubmit(author, content, avatar) : console.log("comented");
    setAuthor("");
    setComment("");
    setImageLink("");
  };
  return (
      <div className={style.addCommentWrapper}>
        <form className={style.commentForm}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          action=""
        >
          <div className={style.inputWrapper}>
            <input
              className={style.input}
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              type="text"
              required={true}
              placeholder="Name"
            />
            <input
            className={style.input}
              onChange={(e) => setImageLink(e.target.value)}
              value={avatar}
              type="text"
              required={true}
              placeholder="avatar picture"
            />
          </div>
          <textarea
          className={style.inputarea}
            onChange={(e) => setComment(e.target.value)}
            value={content}
            required={true}
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <Button type={'submit'} children={'Add comment'}/>
        </form>
      </div>
  );
}

export default AddComent