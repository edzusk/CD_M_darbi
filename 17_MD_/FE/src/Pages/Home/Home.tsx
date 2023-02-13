import style from './Home.module.scss'
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import BlogCard from "../../Components/BlogCard/BlogCard";
import Post from "../../Components/Types";




const Home = () => {


  return (
    <div className="container">
      <img width={'100%'} src="https://media.discordapp.net/attachments/1008571067398369291/1073196773956386866/330237642_1450394915500332_5730713801683318348_n.jpg?width=1784&height=967" alt="" />
    </div>
  )
};

export default Home;
