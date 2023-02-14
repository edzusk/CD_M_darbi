import style from './BlogCard.module.scss'
import Post from '../Types'
import Button from '../inputs_buttons/button'
import { useNavigate } from "react-router-dom";

type BlogCardProps = Post

const BlogCard = ({ title, content, id, image_link}:BlogCardProps) => {
	const navigate = useNavigate()
	const handleclick = () => {
		navigate(`/blog/${id}`)
	}
	return(
		<div className={style.card}>
			<img className={style.cardImage} src={image_link} alt="" />
			<h2 className={style.cardTitle}>{title}</h2>
			<p>{`${content.slice(0,60)}...`}</p>
			<Button onClick={handleclick} children={'Read more'}/>
		</div>
	)
}

export default BlogCard