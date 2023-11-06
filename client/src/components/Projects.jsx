import { Wrapper } from "../Wrappers/Projects"
import calc from '../assets/Calculadora.png'
const Projects = () => {
  return (
    <Wrapper>

        <h1 className="title">Conheça nossos projetos!</h1>
        <div className="projects">

        <h2>Minicurso de Calculadora Científica</h2>
        <div className="sciCalc">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error dolore blanditiis praesentium soluta voluptate atque, fugiat doloremque nisi, minus suscipit quae illum, deleniti vitae adipisci dicta vel fugit aperiam.</p>
        <img src={calc} alt="Minicurso Calculadora" className="calc" />
        </div>
        </div>
    
    </Wrapper>
  )
}

export default Projects