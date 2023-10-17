import '../styles/navbar.scss'
import logo from '../img/rhombus.png'

const Navbar = () => {
  return (
    <nav>
        <div className="ctn-nav">
          <figure>
              <img src={logo} alt="" />
          </figure>
          <button>
              <i className="fa-solid fa-download"></i>
              <h4>Descargar Cv</h4>
          </button>
        </div>
    </nav>
  )
}

export default Navbar