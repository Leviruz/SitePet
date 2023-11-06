import { Wrapper } from "../Wrappers/Logo"
import LogoPet from "../assets/LogoPet.png"
const Logo = () => {
  return (
    <Wrapper>
    <img src={LogoPet} alt="Logo Pet" className="Logo" />
    </Wrapper>
  )
}

export default Logo