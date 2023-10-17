import '../styles/home.scss'
import yo from '../img/yo.png'
import rombo from '../img/rhombus.png'
import frontend from '../img/front-end.png'
import backend from '../img/back-end.png'
import database from '../img/database.png'

const Home = () => {
  return (
    <main>
      <section className="section-1">
        <div className="back-ground">
        </div>
        <div className="info-s1">
          <div className="first-info">
            <h2>Hola, soy</h2>
            <h1>Lenin</h1>
            <h3>Ingeniero de software</h3>
          </div>
          <figure>
            <img src={yo} alt="mi imagen" />
          </figure>
        </div>
      </section>
      <section className="section-2">
        <div className="left">
          <h2>Acerca de mí</h2>
          <h3>Me gusta el diseño, arquitectura y soporte del software</h3>
          {/* <div className="contact-me">
            <button>Descargar Cv</button>
            <ul className="social-networks">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twiter</li>
            </ul>
          </div> */}
          <div className="my-data">
            <ul>
              <li>
                <b>Edad: </b><span>21</span>
              </li>
              <li className='residence'>
                <b>Residencia: </b><span>Lima, Perú</span>
              </li>
              <li>
                <b>Correo electrónico: </b><span>jlenin25mv@gmail.com</span>
              </li>
              <li className='phone'>
                <b>Celular: </b><span>992 754 901</span>
              </li>
            </ul>
            <div className="box-porcentage"></div>
          </div>
        </div>
        <div className="right">
        </div>
      </section>
      <section className="section-3">
        <figure>
          <img src={rombo} alt="" />
        </figure>
        <h2>Mis habilidades</h2>
        <div className="ctn-studies">
          <div className="box h1">
            <figure>
              <img src={frontend} alt="" />
            </figure>
            <h3>Front-End</h3>
          </div>
          <div className="box h2">
            <figure>
              <img src={backend} alt="" />
            </figure>
            <h3>Back-End</h3>
          </div>
          <div className="box h3">
            <figure>
              <img src={database} alt="" />
            </figure>
            <h3>Base de datos</h3>
          </div>
        </div>
      </section>
      <section className="section-4">
        <figure>
          <img src={rombo} alt="" />
        </figure>
        <h2>Experiencia profesional</h2>
        <div className="study-experience">
          <ul className="study">
            <h3>Educación</h3>
            <li>
              <h4>Instituto Americano</h4>
              <span>Computación</span>
              <b className="age">2015 - 2017</b>
            </li>
            <li>
              <h4>SENATI</h4>
              <span>Ingeniería de software con inteligencia artificial</span>
              <b className="age">2020 - 2022</b>
            </li>
            <li>
              <h4>UCH</h4>
              <span>Inglés</span>
              <b className="age">2021 - 2023</b>
            </li>
            <li>
              <h4>UTP</h4>
              <span>Ingeniería de software</span>
              <b className="age">2023 - Actualidad</b>
            </li>
          </ul>
          <ul className="experience">
            <h3>Experiencia</h3>
            <li>
              <h4>Vicat</h4>
              <span>Practicante - Desarrollo web</span>
              <b className="age">2021 - 2022</b>
            </li>
            <li>
              <h4>JhardSystex</h4>
              <span>Técnico soporte N2</span>
              <b className="age">2022 - 2023</b>
            </li>
            <li>
              <h4>Expreso Marvisur</h4>
              <span>Desarrollador de software</span>
              <b className="age">2023</b>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Home