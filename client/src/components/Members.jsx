import { useState } from "react"
import CurrentMembers from "./CurrentMembers";
import PreviousMembers from "./PreviousMembers";
import { Wrapper } from "../Wrappers/Members";
const states = [
{id:1,name:"current"},
{id:2,name:"previous"},

]

const Members = () => {
  const changeToPrevious = ()=>{
   setState(states[1].name)
  }
  const changeToCurrent = ()=>{
   setState(states[0].name)
  }
    const [state,setState] = useState(states[0].name);
  return (
    <Wrapper>
      
    <h1>Conheça nossos Petianos!</h1>
      {state === "current" && (
        <CurrentMembers changeToPrevious={changeToPrevious} />
        )}
      {state === "previous" && (
        <PreviousMembers changeToCurrent={changeToCurrent} />
        )}
        </Wrapper>
  );
}

export default Members