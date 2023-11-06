import { Wrapper } from '../Wrappers/CurrentMembers'
import levir from '../assets/Levir.jpeg'
const CurrentMembers = ({ changeToPrevious }) => {
  return (
    <Wrapper>
      <p>Membros Atuais</p>
    <button onClick={changeToPrevious}>Visualizar ex-petianos</button> 
      <div className="petiano">
        <h3>Levir Melo</h3>
        <div className="container"></div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est saepe quod eaque nihil soluta at sed doloremque animi nemo repellendus, iste nobis harum impedit? Fugiat, tempora! Facere magnam deserunt ea.</p>
        <img src={levir} alt="Levir Melo" />
      </div>
    </Wrapper>
  );
};

export default CurrentMembers