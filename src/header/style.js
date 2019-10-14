import styled from "styled-components";
export const HeaderWrapper = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
`;

export const Nav = styled.div`
    position: relative;
    margin: 0 10%;

`

export const NavItem = styled.div`
  &.left{
    float: left;
  }
  &.right{
      float: right;
  }
  text-align: center;
  padding: 0 15px
  margin: 40px 0 0;
  color: #49515d;
  font-size: 20px;
  font-weight: 500;
  font-family: "Montserrat", Helvetica, sans-serif;
`;
