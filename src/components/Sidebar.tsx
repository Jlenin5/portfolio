// import { HiHome } from "react-icons/hi2"
import logo from '../img/rhombus.png'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import '../styles/sidebar.scss'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside>
        <div className="content-aside">
            <figure className='ctn-logo'>
                <NavLink to='/'>
                    <img src={logo} alt="" />
                </NavLink>
            </figure>
            <ul className='links'>
                <li>
                    {/* <HiHome /> */}
                    <h2>Inicio</h2>
                </li>
                <li>
                    <h2>Acerca de mí</h2>
                </li>
                <li>
                    <h2>Estudios</h2>
                </li>
                <li>
                    <h2>Habilidades</h2>
                </li>
            </ul>
            <ul className="social-networks">
                <li>
                    <Link to="https://github.com/Jlenin25?tab=repositories" target='blank'>
                        <figure>
                            <img src={github} alt="" />
                        </figure>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/in/jlenin/" target='blank'>
                        <figure>
                            <img src={linkedin} alt="" />
                        </figure>
                    </Link>
                </li>
                {/* <li>
                    <figure>
                        <img src={github} alt="" />
                    </figure>
                </li> */}
            </ul>
        </div>
        <div className="hr-vertical"></div>
    </aside>
  )
}

export default Sidebar