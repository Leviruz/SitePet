import styled from "styled-components"

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    list-style: none;
    gap: 70px;
  }
  ul li {
    font-size: 30px;
    border-bottom: 1px solid #fff;
    cursor: pointer;
  }
`;