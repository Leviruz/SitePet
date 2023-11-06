import { Wrapper } from '../Wrappers/TeamImage'
import himg from '../assets/IMG_3676.png'
const TeamImage = () => {
  return (
    <Wrapper>
    <img src={himg} alt="Foto de equipe" className='img'/>
    </Wrapper>
  )
}

export default TeamImage