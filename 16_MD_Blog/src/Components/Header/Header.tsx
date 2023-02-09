import Button from "../inputs_buttons/button";
import style from './Header.module.scss'
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate()

    const handleclick = () =>{
        navigate('/new_post')
    }

    return(
        <section className={style.section}>
            <div className="container">
                <nav className={style.nav}>
                    <div className={style.navWrapper}>
                        <Link className={style.navEl} to='/'> Home</Link>
                        <Link className={style.navEl} to='blog/'>Blog {}</Link>
                    </div>
                <Button children="Add post"/>
                </nav>
            </div>
        </section>
    )
}

export default Header