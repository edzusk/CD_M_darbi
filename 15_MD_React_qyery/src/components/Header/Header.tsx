import { Link } from "react-router-dom"
import style from './Header.module.scss'

const Header = () => {
  return (
    <>
		<div className="container">
      <ul className={style.nav}>
				<li><Link className={style.navEl} to="/">Home</Link></li>
				<li><Link className={style.navEl} to="/characters">Characters</Link></li>
			</ul> 
		</div>
    </>
  )
}

export default Header