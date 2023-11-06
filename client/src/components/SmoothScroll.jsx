import { Link, animateScroll as scroll } from "react-scroll";

function SmoothScroll() {
  return (
    <div>
      <Link
        to="secao1"
        smooth={true}
        offset={-50} // Ajuste o valor do offset conforme necessário
        duration={500} // Ajuste a duração da animação conforme necessário
      >
        Seção 1
      </Link>
      <Link
        to="secao2"
        smooth={true}
        offset={-50}
        duration={500}
      >
        Seção 2
      </Link>
      <Link
        to="secao3"
        smooth={true}
        offset={-50}
        duration={500}
      >
        Seção 3
      </Link>
    </div>
  );
}

export default SmoothScroll;
