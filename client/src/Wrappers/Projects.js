import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  color: #000;
  flex-wrap: wrap;

  .title {
    border-bottom: 5px solid #000;
    padding-bottom: 10px;
  }
  .sciCalc{
    display: flex;
    flex-direction: row;
    margin: 50px;
    gap: 50px;
  }
  .sciCalc p{
    width: 500px;
  }
  .calc {
    width: 30vw;
    border-left: 1px solid #fff;
    border-radius: 25px;
    box-shadow: 13px 11px 13px -8px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 13px 11px 13px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 13px 11px 13px -8px rgba(0, 0, 0, 0.75);
  }
`;